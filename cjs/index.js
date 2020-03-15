'use strict';
const WeakMap = (m => m.__esModule ? /* istanbul ignore next */ m.default : /* istanbul ignore next */ m)(require('@ungap/weakmap'));
const tta = (m => m.__esModule ? /* istanbul ignore next */ m.default : /* istanbul ignore next */ m)(require('@ungap/template-tag-arguments'));
const domsanitizer = (m => m.__esModule ? /* istanbul ignore next */ m.default : /* istanbul ignore next */ m)(require('domsanitizer'));
const umap = (m => m.__esModule ? /* istanbul ignore next */ m.default : /* istanbul ignore next */ m)(require('umap'));

const {Tagger} = require('./tagger.js');
const {Wire, create, freeze, isArray, keys} = require('./shared.js');

const tProto = Tagger.prototype;

const cache = umap(new WeakMap);

const createRender = Tagger => ({
  html: outer('html', Tagger),
  svg: outer('svg', Tagger),
  render(where, what) {
    const hole = typeof what === 'function' ? what() : what;
    const info = cache.get(where) || cache.set(where, newInfo());
    const wire = hole instanceof LighterHole ?
                  retrieve(Tagger, info, hole) : hole;
    if (wire !== info.wire) {
      info.wire = wire;
      where.textContent = '';
      where.appendChild(wire.valueOf(true));
    }
    return where;
  }
});

const newInfo = () => ({sub: [], stack: [], wire: null});

const outer = (type, Tagger) => {
  const cache = umap(new WeakMap);
  const fixed = info => function () {
    return retrieve(Tagger, info, hole.apply(null, arguments));
  };
  hole.for = (ref, id) => {
    const memo = cache.get(ref) || cache.set(ref, create(null));
    return memo[id] || (memo[id] = fixed(newInfo()));
  };
  hole.node = function () {
    return retrieve(Tagger, newInfo(), hole.apply(null, arguments)).valueOf(true);
  };
  return hole;
  function hole() {
    return new LighterHole(type, tta.apply(null, arguments));
  }
};

const retrieve = (Tagger, info, hole) => {
  const {sub, stack} = info;
  const counter = {
    a: 0, aLength: sub.length,
    i: 0, iLength: stack.length
  };
  const wire = unroll(Tagger, info, hole, counter);
  const {a, i, aLength, iLength} = counter;
  if (a < aLength)
    sub.splice(a);
  if (i < iLength)
    stack.splice(i);
  return wire;
};

const unroll = (Tagger, info, hole, counter) => {
  const {stack} = info;
  const {i, iLength} = counter;
  const {type, args} = hole;
  const unknown = i === iLength;
  if (unknown)
    counter.iLength = stack.push({
      type,
      id: args[0],
      tag: null,
      wire: null
    });
  counter.i++;
  unrollArray(Tagger, info, args, counter);
  const entry = stack[i];
  if (unknown || entry.id !== args[0] || entry.type !== type) {
    entry.type = type;
    entry.id = args[0];
    entry.tag = new Tagger(type);
    entry.wire = wiredContent(entry.tag.apply(null, args));
  }
  else
    entry.tag.apply(null, args);
  return entry.wire;
};

const unrollArray = (Tagger, info, args, counter) => {
  for (let i = 1, {length} = args; i < length; i++) {
    const hole = args[i];
    if (typeof hole === 'object' && hole) {
      if (hole instanceof LighterHole)
        args[i] = unroll(Tagger, info, hole, counter);
      else if (isArray(hole)) {
        for (let i = 0, {length} = hole; i < length; i++) {
          const inner = hole[i];
          if (typeof inner === 'object' && inner && inner instanceof LighterHole) {
            const {sub} = info;
            const {a, aLength} = counter;
            if (a === aLength)
              counter.aLength = sub.push(newInfo());
            counter.a++;
            hole[i] = retrieve(Tagger, sub[a], inner);
          }
        }
      }
    }
  }
};

const wiredContent = node => {
  const childNodes = node.childNodes;
  const {length} = childNodes;
  return length === 1 ?
    childNodes[0] :
    (length ? new Wire(childNodes) : node);
};

freeze(LighterHole);
function LighterHole(type, args) {
  this.type = type;
  this.args = args;
};
const Hole = LighterHole;
exports.Hole = Hole;

const custom = overrides => {
  const prototype = create(tProto);
  keys(overrides).forEach(key => {
    prototype[key] = overrides[key](
      prototype[key] ||
      (key === 'convert' ? domsanitizer : String)
    );
  });
  CustomTagger.prototype = prototype;
  return createRender(CustomTagger);
  function CustomTagger() {
    return Tagger.apply(this, arguments);
  }
};
exports.custom = custom;

const {render, html, svg} = createRender(Tagger);
exports.render = render;
exports.html = html;
exports.svg = svg;
