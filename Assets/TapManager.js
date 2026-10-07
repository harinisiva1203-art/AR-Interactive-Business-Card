// @input SceneObject bitmoji
// @input SceneObject bike1
// @input SceneObject bike2

// Initial state
script.bitmoji.enabled = true;
script.bike1.enabled = false;
script.bike2.enabled = false;

var firstTap = true;
var showingBike1 = true;

var touchEvent = script.createEvent("TouchStartEvent");

touchEvent.bind(function () {

    // First tap
    if (firstTap)
    {
        script.bitmoji.enabled = false;
        script.bike1.enabled = true;
        script.bike2.enabled = false;

        firstTap = false;
        showingBike1 = true;
        return;
    }

    // Switch bikes
    showingBike1 = !showingBike1;

    script.bike1.enabled = showingBike1;
    script.bike2.enabled = !showingBike1;

});