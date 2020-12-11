// var client  = mqtt.connect({ host:'test.mosquitto.org', port: 8081})
// or
// var client  = mqtt.connect('wss://test.mosquitto.org:8081/mqtt')

// var client  = mqtt.connect({ host:'mqtt.eclipse.org/mqtt', port: 443})
// or
// var client  = mqtt.connect('wss://mqtt.eclipse.org:443/mqtt')

var broker = 'wss://mqtt.eclipse.org:443/mqtt';
var client  = mqtt.connect(broker);

var status_header = document.getElementById('status-header')

client.on('connect', function () {
    status_header.innerHTML = 'Connected to '+broker; 
    console.log('Connected to '+broker)
    client.subscribe('junrey/messages', function (err) {
        if (!err) {
            client.publish('rose_marry/messages', 'Hello mqtt')
        }
    })
})


var pub_switch = document.getElementById('pub-switch');
pub_switch.onclick = () => {
    client.publish('cpx-switch', pub_switch.checked ? "true" : "false" )
}

var pub_switch1 = document.getElementById('pub-switch1');
pub_switch1.onclick = () => {
    client.publish('cpx-switch', pub_switch1.checked ? "true1" : "false1" )
}

var pub_switch2 = document.getElementById('pub-switch2');
pub_switch2.onclick = () => {
    client.publish('cpx-switch', pub_switch2.checked ? "true2" : "false2" )
}
