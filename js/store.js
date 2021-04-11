const state = {

  links: [

    { name:'Acerca de', to: '/', desc: 'Esta página fue hecha con un router y estados globales propios' },
    { name:'Linux', to: '/Linux', desc:'Comandos de linux que uso' },
    { name:'Arch Linux', to: '/Arch_Linux', desc:'Instalación' },
    // { name:'JavaScript', to: '/JavaScript', desc:'desde api en heroku' },
    { name:'Github', to: '/Github', desc: 'Comandos git' },
    { name:'Variables de entorno', to: '/Variables de entorno', desc: 'Configuración variables de entorno' },
    { name:'Herramientas informaticas', to: '/Herramientas', desc: 'sitios, apis' },
    { name:'Sublime Text', to: '/Sublime', desc:'Configuración' },
    // { name:'Mi Virtual Scroll', to: '/MiVirtual', desc:'mi version con Js' },

  ],

  Herramientas: [

    { linea: 'Sitios que generan jsons', class:'text-black title text-weight-bold' },
    { linea: 'https://jsonplaceholder.typicode.com', link:  'https://jsonplaceholder.typicode.com', class:'text-blue text-weight-bold' },
    { linea: 'https://randomuser.me/', link:  'https://randomuser.me/', class:'text-blue text-weight-bold' },
    { linea: 'Manipular imágenes', class:'text-black title text-weight-bold' },
    { linea: 'https://pixlr.com/es/e/', link:  'https://pixlr.com/es/e/', class:'text-blue text-weight-bold' },
    
  ],

  Arch: [

	{ linea: 'Opcionales', class:'text-black title text-weight-bold' },
	{ linea: 'gpg --keyserver-options auto-key-retrieve --verify archlinux-version-x86_64.iso.sig --> Verificar las firmas' },
	{ linea: 'ip link; ping archlinux.org --> ver si la interfaz de red esta activada' },
	{ linea: 'timedatectl set-ntp true --> actualizar el reloj del sistema' },

	{ linea: 'Instalación', class:'text-black title text-weight-bold' },
	{ linea: 'loadkeys es --> poner teclado temporal en idioma español' },
	{ linea: 'Particionar el disco', class:'text-black title text-weight-bold' },
	{ linea: 'fdisk -l --> para ver como se llama nuestro disco, ej: sda' },
	{ linea: 'fdisk /dev/sda' },
	{ linea: 'm, o --> Crear tabla de particiones' },
	{ linea: 'n, p, 1, , +10g' },
	{ linea: 'n, e, 2 -->' },
	{ linea: 'n, , +8g --> resto' },
	{ linea: 'n, , , --> swap ' },
	{ linea: 't, 6, L, 82 --> escoger swap' },
	{ linea: 'a, 1 --> escoger boot' },
	{ linea: 'p --> para ver los cambios' },
	{ linea: 'w --> guardar, ASEGURATE HACERLO BIEN' },

	{ linea: 'Dar formato a las particiones', class:'text-black title text-weight-bold' },
	{ linea: 'mkswap /dev/sda6; swapon --> activar swap' },
	{ linea: 'mkfs.ext4 /dev/sda1' },
	{ linea: 'mkfs.ext4 /dev/sda5' },

	{ linea: 'Montar las particiones', class:'text-black title text-weight-bold' },
	{ linea: 'mount /dev/sda1 /mnt' },
	{ linea: 'mkdir /mnt/home' },
	{ linea: 'mount /dev/sda5 /mnt/home' },

	{ linea: 'Instalar', class:'text-black title text-weight-bold' },
	{ linea: 'pacstrap /mnt base base-devel grub os-prober ntfs-3g networkmanager gvfs gvfs-afc gvfs-mtp xdg-user-dirs linux linux-firmware nano dhcpd netctl wpa_supplicant dialog --> base de linux, su firmware, editor nano, packetes de internet, gestores de ventanas, y muchas configuraciones más.' },
	{ linea: 'genfstab -U /mnt >> /mnt/etc/fstab --> Genere un archivo fstab' },
	{ linea: 'cat /mnt/etc/fstab --> para ver si lo genero' },
	{ linea: 'arch-chroot /mnt --> Acceder al sistema que creamos' },

	{ linea: 'Configuraciones', class:'text-black title text-weight-bold' },
	{ linea: 'echo namePc > /etc/hostname' },
	{ linea: 'ls /usr/share/zoneinfo/ --> Ve que regiones hay y elige la cercana' },
	{ linea: 'ln -sf /usr/share/zoneinfo/Chile/Continental /etc/localtime --> En mi caso' },
	{ linea: 'nano /etc/locale.gen --> quitar # a tu idioma' },
	{ linea: 'echo LANG=es_ES.UTF8 > /etc/locale.conf' },
	{ linea: 'locale-gen --> Genere el archivo local del sistema' },
	{ linea: 'echo KEYMAP=es > /etc/vconsole.conf' },
	{ linea: 'grub-install /dev/sda --> instalar en sda (disco y no mnt)' },
	{ linea: 'grub-mkconfig -o /boot/grub/grub.cfg --> Actualizar la conf de grub' },

	{ linea: 'Crear usuario', class:'text-black title text-weight-bold' },
	{ linea: 'passwd --> Contraseña root' },
	{ linea: 'groupadd tuName' },
	{ linea: 'useradd -m -g tuName -s /bin/bash tuName ' },
	{ linea: 'passwd tuName ' },
	{ linea: 'exit' },
	{ linea: 'umount -R /mnt' },
	{ linea: 'reboot now' },

	{ linea: 'Boot system actual --> arch linux', class:'text-black title text-weight-bold' },
	{ linea: 'Ingresa como root' },
	{ linea: 'nano /etc/sudoers --> al final pon tuName ALL=(ALL) NOPASSWD:ALL' },

	{ linea: 'Ver si hay internet' },
	{ linea: 'systemctl enable NetworkManager.service' },
	{ linea: 'systemctl start NetworkManager.service' },
	{ linea: 'ip link' },

	{ linea: 'exit y logeamos con nuestro usuario creado (tuName)' },
	{ linea: 'sudo pacman -Syyu --> Actualizamos el sistema' },

	{ linea: 'Instalar entorno grafico', class: 'text-black title text-weight-bold' },
	{ linea: 'sudo pacman -S xorg-server xorg-xinit --> servidor del entorno' },
	{ linea: 'sudo pacman -S mesa mesa-demos' },
	{ linea: 'sudo pacman -S xfce4-goodies network-manager-applet' },

	{ linea: 'configurar inicio manual', class:'text-black title text-weight-bold' },
	{ linea: 'nano /home/tuName/.xinitrc' },
	{ linea: 'exec startxfce4 en nano' },
	{ linea: 'sudo pacman -S lxdm --> Gestor de inicio de sesión' },
	{ linea: 'sudo systemctl enable lxdm' },
	{ linea: 'Reiniciar la maquina (como es el paso final conviene más reiniciar directamente aunque se puede con comando)' },

	{ linea: 'PostInstall', class:'text-black title text-weight-bold' },
	{ linea: 'https://denovatoanovato.net/que-hacer-despues-de-instalar-archlinux', link:  'https://denovatoanovato.net/que-hacer-despues-de-instalar-archlinux' },
    { linea: 'https://wiki.archlinux.org/index.php/General_recommendations', link: 'https://wiki.archlinux.org/index.php/General_recommendations' },
    { linea: 'https://wiki.archlinux.org/index.php/List_of_applications', link: 'https://wiki.archlinux.org/index.php/List_of_applications' },
    { linea: 'https://youtu.be/jW4GFGOIUjc', link: 'https://youtu.be/jW4GFGOIUjc' },
    { linea: 'https://youtu.be/jeRGlTuKxZg', link: 'https://youtu.be/jeRGlTuKxZg' },
    { linea: 'Temas -> Buscar site: xfce themes o anda a https://www.xfce-look.org/browse/cat/138/order/latest/' },
    { linea: 'Descomprime el archivo --> tar -xzf ruta [si es .xz pon -xf, si es .gz -xzf]' },
    { linea: 'copia el tema dentro en carpeta de usuario/.themes, sino existe creala, ve a apariencia y cambialo' },
    { linea: 'Instala alacrity --> sudo pacman -S alacrity' }

  ],

  Linux: [

    { linea: 'Mencoder', class:'text-black title text-weight-bold' },
    { linea: 'Instalar: sudo apt-get install mencoder' },
    { linea: 'Convertir los formatos a mp4, en mi caso uso una extension de chrome para grabar' },
    { linea: 'mencoder -ovc copy -oac pcm -o videos_juntados.mp4 video1.mp4 video2.mp4' },
    { linea: 'Obtener el audio por 840 sgds y agregarlo a otro video' },
    { linea: 'ffmpeg -i audio.mp4 -t 840 audio-cortado.mp4 && ffmpeg -i video.mp4 -i audio-cortado.mp4 -c:v copy -c:a copy video-con-audio.mp4' },

    { linea: 'Shotcut', class:'text-black title text-weight-bold' },
    { linea: 'Instalar: https://www.shotcut.org' },
    { linea: 'Uso: sh ./Shotcut.app/shotcut' },

    { linea: 'Formatear Usb', class:'text-black title text-weight-bold' },
    { linea: 'Ubica el nombre de tu unidad, por ej sdb' },
    { linea: 'Desmontamos, sudo umount /dev/sdb1 (el numero seria la partición)' },
    { linea: 'sudo mkfs.vfat -F 32 -n tunombre /dev/sdb1' },

    { linea: 'Crear tabla de partición para recuperar usb (ni se te ocurra hacerlo asi con un disco)', class:'text-black title text-weight-bold' },
    { linea: 'sudo fdisk -l, detecta las particiones del disco' },
    { linea: 'sudo fdisk /dev/sdb, Selecciona la particion del pendrive' },
    { linea: 'm para ver los comandos' }, 
    { linea: 'o para crear una nueva tabla de particiones DOS vacía' },
    { linea: 'n, crea una nueva partición para el sistema' },
    { linea: 'p (primary), numero: 1, vacio, 2048' },
    { linea: 'n, Partición para guardar cosas' },
    { linea: 'p, numero: 2, vacios' },
    { linea: 'p para ver' },
    { linea: 'a para indicar la particion del sistema, en este caso la 1era' },
    { linea: 'si pones p de nuevo veras que hay un *' },
    { linea: 'w para sobreescribir el disco' },
    { linea: 'sudo mkfs.vfat -F 32 -n tunombre /dev/ elige la particion donde guardaras (en este caso seria sdb2 ya que eligimos n2)' },

    { linea: 'Cambiar los permisos de todos los archivos dentro de un directorio y determinar el grupo de usuarios', class:'text-black title text-weight-bold' },
    { linea: 'sudo chmod -R ugo+rwx /ruta/directorio' },

    { linea: 'Forzar desinstalar packetes'},
    { linea: 'sudo  dpkg --remove --force-remove-reinstreq packete'},

    { linea: 'Matar un proceso'},
    { linea: 'kill pid'},

    { linea: 'Instalar packetes debian, ej con chrome', class:'text-black title text-weight-bold' },
    { linea: 'Descargar chrome', link: 'https://www.google.com/intl/es-419/chrome/', class:'text-blue text-weight-bold' },
    { linea: 'sudo dpkg -i no del packete .deb que descargaste' },

    { linea: 'Instalar tar.gz', class:'text-black title text-weight-bold'  },
    { linea: 'Para descomprimir tar -xzvf ' },

    { linea: 'VMware', class:'text-black title text-weight-bold' },
    { linea: 'Descargar', link: 'https://www.vmware.com/es/products/workstation-player/workstation-player-evaluation.html', class:'text-blue text-weight-bold' },
    { linea: 'Posicionate en la carpeta de descomprención' },
    { linea: 'Dale permisos al archivo: chmod +x VMware-Player*' },
    { linea: 'sudo apt-get install gcc build-essential (Si no esta instalado)' },
    { linea: 'Instala el archivo: sudo ./VMware-Player*' },

    { linea: 'Programa para grabar', class:'text-black title text-weight-bold' },
    { linea: 'https://www.maartenbaert.be/simplescreenrecorder/' },

    { linea: 'Alias', class:'text-black title text-weight-bold' },
    { linea: 'Ejemplos' },
    { linea: 'alias sag="sudo apt-get"' },
    { linea: 'alias copyReadme="cp /home/nax/Documentos/Misc/readme.md ./"' },
    { linea: 'alias limpiar="sag autoremove && sag autoclean && sag clean"' },
    { linea: 'alias update="sag update && sag upgrade"' },
    { linea: 'alias naxchat="cd && cd Quasar/naxChat && quasar dev"' },
    { linea: 'alias studio="cd && cd Descargas/android-studio/bin && ./studio.sh"' },
    { linea: 'Para que sean permanentes edita el ~/.bashrc con algun editor, ej nano ~/.bashrc y copialos al final ' },

    { linea: 'Instalar ultima version de nodejs en linux ', class:'text-black title text-weight-bold' },
    { link: 'https://nodejs.org/es/', linea:'Descargar para linux', class:'text-black title text-weight-bold', class:'text-blue text-weight-bold' },
    { linea: 'Descomprime el archivo .tar.xz y renombra la carpeta a nodejs ' },
    { linea: 'En terminal instala los archivos' },
    { linea: 'sudo cp -r nodejs/{bin,include,lib,share} /usr/ ' },

    { linea: 'Ver Drivers ', class:'text-black title text-weight-bold' },
    { linea: 'lspci -v' },

  ],

  Github: [

    { linea: 'sudo apt install git', class:'text-black title text-weight-bold' },
    { linea:'Instalar git' },
    { linea: 'git init', class:'text-black title text-weight-bold' },
    { linea:'Inicia repositorio de git que constantemente revisa los cambios' },
    { linea: '.gitignore', class:'text-black title text-weight-bold' },
    { linea: 'Ignora lo señalado. Ej: node_modules' },
    { linea: 'git status', class:'text-black title text-weight-bold' },
    { linea: 'Te da informacion del estado del estado que se encuentra tu commit' },
    { linea: 'git add', class:'text-black title text-weight-bold' },
    { linea: 'Agrega al commit, ej: git add ruta/archivo' },
    { linea: 'git add .', class:'text-black title text-weight-bold' },
    { linea: 'Agrega todas las carpetas con cambios detectados al commit' },
    { linea: 'git commit -m "comentario" ', class:'text-black title text-weight-bold' },
    { linea: 'Descripcion de tu commit' },
    { linea: 'git log', class:'text-black title text-weight-bold' },
    { linea: 'Te informa el estado de tus commits y en que rama estas, ej: git log > commits.txt puedes redirigir la salida con este comando' },
    { linea: 'git reset .', class:'text-black title text-weight-bold' },
    { linea: 'Resetea el ultimo cambio' },
    { linea: 'git reset --hard (warning) ', class:'text-black title text-weight-bold' },
    { linea: 'Resetea todo los commits hechos, *cuidado con este comando '  },
    { linea: 'git branch ', class:'text-black title text-weight-bold' },
    { linea: 'Crea una rama, ej: gitnch NoRama'  },
    { linea: 'git checkout', class:'text-black title text-weight-bold' },
    { linea: 'Para moverte entre ramas, ej: git checkout test'  },
    { linea: 'git push origin master', class:'text-black title text-weight-bold' },
    { linea: 'Sube tu commit a tu repo de Github '  },
    { linea: 'git clone', class:'text-black title text-weight-bold' },
    { linea: 'Clona un git '  },

    { linea: 'Ejemplo', class:'text-black title text-weight-bold' },
    { linea: 'Clono mi proyecto --> git clone https://github.com/naxo25/AppMovil-QuasarVueJsFirebase.git '  },
    { linea: 'uso git log para ver los commits y ramas que se han realizado '  },
    { linea: 'No quiero usar la rama principal asi que creo una con gitnch Test y me posiciono con git chekout Test '  },
    { linea: 'Subo una carpeta git add Carpeta '  },
    { linea: 'Realizo un comentario git commit -m "Mi primer commit" '  },
    { linea: 'Subo ese cambio a mi repo git push origin Test (Si quieres subir a la rama principal cambia Test a master, antes revisa si estas en ella eso si) '  },
    { linea: 'Me pedira mi usuario de github, en este caso naxo25 y la clave, puedes usar git push origin master -f para forzar cambios a git '  },

  ],

  Variables_de_entorno: [

    { linea: 'Configuración que use instalando Quasar', class:'text-black title text-weight-bold' },
    { linea: 'Variables para linux', class:'text-black title text-weight-bold' },
    { linea: 'Ubicate donde instalaste Android. Ej:/Android/Sdk/tools/bin' },
    { linea: 'Acepta los permisos usando este comando en la consola ./sdkmanager --licenses' },
    { linea: 'para instalar jdk8 => sudo apt install openjdk-8-jdk' },

    { linea: 'exporta las variables al path del sistema, estas rutas son de ejemplo, varian en cada caso, por ej android puede haberse instalado en el directorio /library o /opt y así', class:'text-black title text-weight-bold' },
    { linea: 'puedes editar el bashrc para que se inicien al iniciar el sistema o exportarlas solo para la sesion actual, para editar el bashrc => nano (o otro editor) ~/.bashrc' },

    { linea: 'export ANDROID_HOME="$HOME/Android/Sdk"' },
    { linea: 'export ANDROID_SDK_ROOT="$HOME/Android/Sdk"' },
    { linea: 'export JAVA_HOME="/usr/lib/jvm/java-1.8.0-openjdk-amd64"' },
    { linea: 'export GRADLE="$ANDROID_SDK_ROOT/gradle-4.10.3/bin"' },
    { linea: 'export PATH=$PATH:$ANDROID_SDK_ROOT/tools;' },
    { linea: 'export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools;' },
    { linea: 'export PATH=$PATH:$JAVA_HOME;' },
    { linea: 'export PATH=$PATH:$GRADLE;' },
    { linea: 'Reinicia el equipo o actualiza las variables con source ~/.bashrc' },

    { linea: 'Configuración', class:'text-black title text-weight-bold' },
    { linea: 'Para cordova', class:'text-black title text-weight-bold' },
    { linea: 'Añade cordova' },
    { linea: 'sudo quasar mode add cordova' },
    { linea: 'Te pedira el id, ej com.naxweb.nombreapp' },
    { linea: 'cd src-cordova' },
    { linea: 'sudo cordova platform add android o ios => Instala como admin' },
    { linea: 'Dale permisos a la carpeta src-cordova => sudo chmod -R ugo+rwx ./src-cordova' },
    { linea: 'quasar build -m cordova -T android o ios' },

    { linea: 'Si la apk que genera te da errores luego de generar la build con el comando abre android studio e importa el proyecto como grodle (/src-cordova/platforms/android), espera que se importe, NO ACTUALIZES GRODLE, si ves que lo hace cancelalo o configuralo, luego en el menu por build => build bundles/apks => build apk, cierra el proyecto y guardarlo' },
    { liena: '/tuApp/src-cordova/platforms/android/app/build/outputs/apk/debug/app-debug.apk' },

    { linea: 'Documentación de Quasar', link: 'https://next.quasar.dev/quasar-cli/developing-cordova-apps/preparation#android-setup' },

    { linea: 'Windows', class:'text-black title text-weight-bold' },
    { linea: '1 descarga java' },
    { linea: '2 descarga grogle' },
    { linea: '2.3 ve a variables de entorno y agrega las rutas' },

    { linea: 'ANDROID_SDK_ROOT  --  C:\Users\{tu user}\AppData\Local\Android\Sdk' },
    { linea: 'JAVA_HOME     --  C:\Program Files\Java\jdk1.8.0_251' },

    { linea: 'agrega las variables al path del system' },
    { linea: ';%JAVA_HOME%\bin;%USERPROFILE%\AppData\Local\Android\Sdk\platforms; ' },
    { linea: '%USERPROFILE%\AppData\Local\Android\Sdk\platform-tools; ' },
    { linea: '%USERPROFILE%\AppData\Local\Android\Sdk\gradle-4.10.3\bin  ' },


  ],

  Sublime:[

    { linea: "Abre el paquete de control -> ctrl + shift + p " },
    { linea: "Selecciona Package Control: install package" },
    { linea: "Se abrira otra barra donde escribes estos atajos (si copias y no aparecen, escríbelos), das enter y los instala (izquierda abajo te muestra % de instalación)" },
    { linea: "Emmet --> Atajos de código Html, etiquetas", class:'text-black title text-weight-bold' },
    { linea: "Ejs: Al empezar un .html pon ! + tabulador" },
    { linea: "div>ul*2>li*5 + tab" },
    { linea: "Lorem + tab --> Te genera un texto random" },
    { linea: "Auto​File​Name --> Te muestra las rutas de los archivos segun la ruta", class:'text-black title text-weight-bold' },
    { linea: "Por Ej en la ruta de un require, import, href, etc" },
    { linea: "HTML Minifier --> Te crea un archivo minificado(.min) del actual.", class:'text-black title text-weight-bold' },
    { linea: "ctrl + mayus + m" },
    { linea: "Console Wrap --> Te permite sacar un console.log de un objeto Js seleccionado (Donde tengas el click).", class:'text-black title text-weight-bold' },
    { linea: "ctrl + shift + q" },
    { linea: "JsFormat --> Identa código Javascript", class:'text-black title text-weight-bold' },
    { linea: "ctrl + alt + f" },
    { linea: "Java​Script & Node​JS Snippets --> Autocompleta código Javascript", class:'text-black title text-weight-bold' },
    { linea: "Ej: cl --> console.log(obj)" },
    { linea: "Opcionales", class:'text-black title text-weight-bold' },
    { linea: "Monokai Dark --> Para tema negro" },
    { linea: "FileIcons --> Visualiza los íconos según extensión en el panel de sublime" },
    { linea: "Babel --> ES6+ JavaScript con React JSX syntax (Si quieres que abra un archivo siempre con esta síntaxis, View --> Syntax --> Open all with.. --> Babel --> Js Babel)" },
    { linea: "Sublime ES7 React/Redux/React-Native/JS snippets, Ej: Escribe useState y te saldría const [state, setState] = useState(initialState)" },

    { linea: 'Comentar/descomentar código', class:'text-black title text-weight-bold' },
    { linea: 'Preferences -> Key Bindings' },
    { linea: '{ "keys": ["ctrl+7"], "command": "toggle_comment",' },
    { linea: '    "args": { "block": false }' },
    { linea: '}' },

    { linea: 'Para abrir navegador', class:'text-black title text-weight-bold' },
    { linea: 'Preferences -> Package Settings -> Side Bar -> Settings User' },
    { linea: '{ "keys": ["shift+f6"],' },
    { linea: '"command": "side_bar_open_in_browser" ,' },
    { linea: '"args":{"paths":[], "type":"production", "browser":""}' },
    { linea: '}' },

  ]

}

const actions = {
  maximizar(){
    var el = document.documentElement;
    var rfs = // for newer Webkit and Firefox
    el.requestFullScreen
    || el.webkitRequestFullScreen
    || el.mozRequestFullScreen
    || el.msRequestFullScreen;
    if(typeof rfs!="undefined" && rfs){
        rfs.call(el)
    } else if(typeof window.ActiveXObject!="undefined"){
      // for Internet Explorer
      var wscript = new ActiveXObject("WScript.Shell");
      if (wscript!=null) {
          wscript.SendKeys("{F11}");
      }
    }
  }
}

/* Reactive Vars */
const [ num, setNum ] = setReactive(5,'Num')
const [ name, setName ] = setReactive('Laura','Names')
