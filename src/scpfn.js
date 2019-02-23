const scpfn = {
  let: (obj, block) => {
    return block(obj)
  },
  also: (obj, block) => {
    block(obj)
    return obj
  },
  inject: target => {
    target.let = function (block) {
      return scpfn.let(this, block)
    }
    target.also = function (block) {
      return scpfn.also(this, block)
    }
  }
}
export default scpfn