<p><img alt="" src="https://github.com/Kanrog/Rook-2020-Scalable/blob/main/Images/rook2020scalable.jpg?raw=true" /></p>

<h1> Rook 2020 Scalable</h1>

<p>This is my mod for the Rook 2020 to make it fully scalable to any size.<br />

<p>This also adds a tripple belted Z-axis<br />
<br />
Uses the same BOM as the ROOK 2020, but with some additional hardware.<br />
<em>(Full BOM will be made when it is built and tested)</em></p>

<p><br />
<em><strong>To determine your extrusion and rail lenghts, add 150mm to your bed-size and 100mm to your desired Z-height</strong></em><br />
<br />
Fo for a 200x200x200 build volume, your extrusions would be 350x350 for top and bottom frame and 300 for Z.<br />
<br />
<em><strong>X-axis extrusion and rail is 50mm shorter than your top frame.</strong></em><br />
<br />
Supports MGN9C for the Z axis and X axis, and MGN12C for Y-axis.<br />
In theory, the X axis can use any rail to adapt to your desired printhead.<br />
<br />
Want to use the parts from your Ender-3? have a look at <a href="https://www.printables.com/model/487388-rook-e3" rel="ugc" target="_blank">THIS</a></p>

<a href="https://docs.google.com/spreadsheets/d/1HToAhn2cysvaPQEpnX_CcEi542RhAoKbjcgvA1xYTR8/edit?usp=sharing" rel="ugc" target="_blank">Rough BOM (WIP)</a></p>



<h4><br />
<em>Want to help me beta-test this? let me know!</em></h4>

<!DOCTYPE html>
<html>
  <body> Desired X Size: <input type="text" id="size_input_x">
    <br> Desired Y Size: <input type="text" id="size_input_y">
    <br> Desired Z Size: <input type="text" id="size_input_z">
    <br>
    <button onclick="Calculate()">Submit</button>
    <script>
      function Calculate() {
        var input_x = document.getElementById("size_input_x").value;
        var input_y = document.getElementById("size_input_y").value;
        var input_z = document.getElementById("size_input_z").value;
        var total_x = parseFloat(input_x) + 150.0;
        var total_x_2 = total_x - 50.0;
        var total_y = parseFloat(input_y);
        var total_y_2 = total_y + 150.0;
        var total_z = parseFloat(input_z) + 100.0;
        alert("X will need: 6x " + total_x + "mm, 1x " + total_x_2 + "mm and 1x " + (total_x - 150.0) + "mm MGN9C rail\nY will need: 4x " + total_y_2 + "mm, 2x " + total_y + "mm and 2x " + total_y + "mm MGN12C rails\nZ will need: 5x " + total_z + "mm and 3x " + (total_z - 100.0) + "mm MGN9C rails\n");
      }
    </script>
  </body>
</html>