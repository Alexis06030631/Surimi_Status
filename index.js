const DiscordRPC = require("discord-rpc")

const clientId = '893211790345916487'
// Connection to your Discord account
DiscordRPC.register(clientId)

//Connect the user to the rpc client and init the timer
const rpc = new DiscordRPC.Client({ transport: 'ipc' })
const startTimestamp = new Date();


function setActivity(){
    rpc.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "Join Surimi !",
            state: "A powerful discord bot !",

            timestamps: {
                start: Math.round(startTimestamp.getTime())
            },

            assets: {
                large_image: "surimi",
                large_text: "Surimi supporting",
                small_image: "googlumi",
                small_text: "Googlumi"
            },

            buttons: [
                {
                    label: "Invite Surimi !",
                    url: "https://bit.ly/inviteSurimi"
                },
                {
                    label: "Join Surimi support!",
                    url: "https://discord.gg/Zw2U6Rrce2"
                }
            ]
        }
    }).then(() =>
        console.log("Activity set")
    ).catch(console.error)
}

rpc.on('ready', () => {
    console.log(`RPC Connected to ${rpc.user.username} account !`)
    setActivity();
})

//connection to the bot
rpc.login({ clientId }).catch(console.error);