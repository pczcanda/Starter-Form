$(document).ready(function() {

    /**
    * For this function to run, a class called 'custom-checkbox-radio' must be
    * applied to the parent container of the input(s).
    */

    // Set a variable for custom checkbox and radio containers.

    var customCheckboxRadio = $(".custom-checkbox-radio");

    // If no custom checkbox or radio exist, don't continue the function.

    if (customCheckboxRadio.length == 0) {
        return;
    }

    // Add 'checked-' and '-blur' classes 

    var styledCheckboxRadioInput = function () {
        $("label[for='" + this.id + "']").addClass('checked-' + this.checked + '-blur');
    }

    $('.custom-checkbox-radio input').each(styledCheckboxRadioInput);

    // Event handlers to determine what functions are run.

    $('.custom-checkbox-radio input')
    .click(changeCheckboxRadioCheckStyle)
    .blur(changeCheckboxRadioFocusStyle)
    .focus(changeCheckboxRadioFocusStyle);

    // Apply 'true' or 'false' class name depending on the input checked status.

    function changeCheckboxRadioCheckStyle() {
        customCheckboxRadio.find("label").each(function () {
            this.className = this.className.replace(/true|false/, "false");
        });

        var labelDom = $("label[for='" + this.id + "']").get(0);
        labelDom.className = labelDom.className.replace(/true|false/, "true");
    }

    // Apply 'blur' or 'focus' class name depending on the input focus status.

    function changeCheckboxRadioFocusStyle(evt) {
        var labelDom = $("label[for='" + this.id + "']").get(0);
        labelDom.className = labelDom.className.replace(/blur|focus/, evt.type);
    }

});