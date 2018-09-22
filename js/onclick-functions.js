/* button with onclick = many functions */
<button id="wl-vl-si-units-btn" onclick="closelistbtn('wl-vl-si-units'); listVideo('wl-vl-si-units','8.01x - Lect 1 - Powers of 10, Units, Dimensions, Uncertainties, Scaling Arguments ','https://www.youtube.com/embed/GtOGurrUPmQ'); endlistVideo('wl-vl-si-units');" 
data-toggle="tooltip" title="Click to see list of videos">
MIT Lectures by Walter Lewin<br>
They will make you ♥ Physics</button>


<!-- script with .addEventListener("click", function() {many functions}) -->
<button id="wl-vl-si-units-btn"data-toggle="tooltip" title="Click to see list of videos">MIT Lectures by Walter Lewin.<br>              They will make you ♥ Physics.</button>
<script>
document.getElementById("wl-vl-si-units-btn").addEventListener("click", function() {
    closelistVideo('wl-vl-si-units'); 
    listVideo('wl-vl-si-units','8.01x - Lect 1 - Powers of 10, Units, Dimensions, Uncertainties, Scaling Arguments ','https://www.youtube.com/embed/GtOGurrUPmQ');
    endlistVideo('wl-vl-si-units');
    });
</script>


<!-- script with .onclick = function() {many functions} -->
<button id="wl-vl-si-units-btn"data-toggle="tooltip" title="Click to see list of videos">MIT Lectures by Walter Lewin.<br>              They will make you ♥ Physics.</button>
<script>
document.getElementById("wl-vl-si-units-btn").onclick = function() {closelistVideo('wl-vl-si-units'); listVideo('wl-vl-si-units','8.01x - Lect 1 - Powers of 10, Units, Dimensions, Uncertainties, Scaling Arguments ','https://www.youtube.com/embed/GtOGurrUPmQ'); endlistVideo('wl-vl-si-units');};
</script>

