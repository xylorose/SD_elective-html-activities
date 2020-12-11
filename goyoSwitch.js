var broker = 'wss://mqtt.eclipse.org:443/mqtt';
var client  = mqtt.connect(broker);

var status_header = document.getElementById('status-header')

client.on('connect', function () {
    status_header.innerHTML = 'Connected to '+broker; 
    console.log('Connected to '+broker)
    client.subscribe('rose_marry/messages', function (err) {
        if (!err) {
            client.publish('rose_marry/messages', 'Hello mqtt')
        }
    })
})


var pub_switch = document.getElementById('pub-switch');
pub_switch.onclick = () => {
    client.publish('cpx-switch', pub_switch.checked ? "true" : "false" )
}