
const pages = {

    myRender() {
      const input = '<input type="text" class="Names" value='+name+'>'
      return (`
        <div>
          <h6> Ejemplo de variables reactivas con mi libreria para mantener el estado global entre páginas. <p><a target='blank' href="https://github.com/naxo25/RenderJs"> https://github.com/naxo25/RenderJs </a></p> </h6>
          <p class="Num">` + num + `</p>
          `+ input +` <br><br>
          <button onclick='setNum(1)'> Sumar 1 y renderizar </button>
          <button onclick='setName("Juan")'> Cambiar Nombre </button>
        </div>
      `)
    },

    createRender(arr){
      const json = JSON.stringify(arr);
      return (
        /* console.log('Ok') + */
        `<q-list v-for='item in ` + json + `'>
            <q-item-label :class='item.class'>
              <a :href='item.link' target='blank'>
            {{ item.linea }}
          </a>
        </q-item-label> </q-list>`
      )
    },

}
