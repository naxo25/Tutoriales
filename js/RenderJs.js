// let toType = function(obj) {
//   return ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
//}

const getElement = (Prop) => {
  return document.querySelector('.'+Prop) || document.querySelector('#'+Prop) || false
}
const regex = /^[0-9]*(\.?)[0-9]+$/;
const renders = []

const setReactive = (value, element) => [
  value,
  (newValue)=> {
    try {
      const isType = typeof(newValue)
      if (isType === 'number') value += newValue
      else if (isType === 'string') value = newValue

      let renderValue = renders.find(item => item.element == element)
      renderValue.value = value
      const itemSetRender = getElement(element)

      if (itemSetRender.value) {
        itemSetRender.value = value
      }
      else if (itemSetRender.innerText) {
        itemSetRender.innerText = value
      }

      // try { console.log(itemSetrRender) } catch(e) { console.log(e) } // Ejemplo de error
    } catch(e) { console.log(e) }
  },
    renders[!renders ? 0 : renders.length] = {
      value,
      element,
      type: 'number',
    },
]

const myRender =()=> {

  try {
    renders.map(item => {

      const itemRender = getElement(item.element)
      const prev = itemRender.innerText || itemRender.value || false;

      if (!prev) {
      } else {

      // Comprobar tipo de dato
      const isType = prev.match(regex) ? Number(prev) : prev // Comprobar si es numero
      // console.log(typeof prev, typeof renders['Home'], isType)

        if (isType !== item.value) {

          if (itemRender.innerText) {

            itemRender.innerText = item.value

          }

          else if (itemRender.value) {

            itemRender.value = item.value

          }

        }

      }
    })
  } catch(e) { console.log('error', e) }

}
