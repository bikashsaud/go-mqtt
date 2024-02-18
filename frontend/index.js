const broker = "broker.emqx.io",
      port = 8083,
      clientID = "js-subscriber",
      topic = "test/topic";

const client = new Paho.MQTT.Client(broker, port, clientID);


function onConnect() {
    console.log("Connected to MQTT broker");
    client.subscribe(topic);
    console.log(`Subscribed to topic: ${topic}`);
  }


client.onConnectionLost = (responseObject) => {
if (responseObject.errorCode !== 0) {
    console.log(`Connection lost: ${responseObject.errorMessage}`);
}
};


client.connect({
  onSuccess: onConnect,
  onFailure: function (message) {
    console.log("Connection failed: " + message.errorMessage);
  },
  useSSL: false
});
