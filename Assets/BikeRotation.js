// @input SceneObject bike1
// @input SceneObject bike2
// @input float rotationSpeed = 30.0

var updateEvent = script.createEvent("UpdateEvent");

updateEvent.bind(function(eventData) {

    var rotation = script.rotationSpeed * getDeltaTime();

    if (script.bike1.enabled) {
        var transform = script.bike1.getTransform();
        var currentRotation = transform.getLocalRotation();

        transform.setLocalRotation(
            quat.angleAxis(rotation * Math.PI / 180, vec3.up()).multiply(currentRotation)
        );
    }

    if (script.bike2.enabled) {
        var transform = script.bike2.getTransform();
        var currentRotation = transform.getLocalRotation();

        transform.setLocalRotation(
            quat.angleAxis(rotation * Math.PI / 180, vec3.up()).multiply(currentRotation)
        );
    }
});