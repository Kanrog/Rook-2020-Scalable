function calculate() {
  let xInput = document.getElementById('xSize')?.value;
  let yInput = document.getElementById('ySize')?.value;
  let zInput = document.getElementById('zSize')?.value;

  // so just round to closest 50mm?
  // so 330 + 150 = 480 but suggest 500
  // 330 + 100 = 430 but suggest 450

  const shouldRound = document.getElementById('round').checked;
  if (shouldRound) {
    xInput = Math.round(xInput / 50) * 50;
    yInput = Math.round(yInput / 50) * 50;
    zInput = Math.round(zInput / 50) * 50;
  }

  const xOutput = document.getElementById('xOutput');
  const yOutput = document.getElementById('yOutput');
  const zOutput = document.getElementById('zOutput');

  const total_x = parseFloat(xInput) + 150.0;
  const total_x_2 = total_x - 50.0;
  const total_y = parseFloat(yInput);
  const total_y_2 = total_y + 150.0;
  const total_z = parseFloat(zInput) + 100.0;

  if (isNaN(total_x)) {
    xOutput.textContent = 'please enter a number for x size';
  } else {
    xOutput.textContent =
      'X will need: 6x ' +
      total_x +
      'mm, 1x ' +
      total_x_2 +
      'mm and 1x ' +
      (total_x - 50.0) +
      'mm MGN9C rail';
  }

  if (isNaN(total_y)) {
    yOutput.textContent = 'please enter a number for y size';
  } else {
    yOutput.textContent =
      'Y will need: 4x ' +
      total_y_2 +
      'mm, 2x ' +
      (total_y + 0) +
      'mm and 2x ' +
      (total_y + 150) +
      'mm MGN12C rails';
  }

  if (isNaN(total_z)) {
    zOutput.textContent = 'please enter a number for z size';
  } else {
    zOutput.textContent =
      'Z will need: 5x ' +
      total_z +
      'mm and 3x ' +
      (total_z) +
      'mm MGN9C rails';
  }
}

document.getElementById('xSize').addEventListener('input', calculate);
document.getElementById('ySize').addEventListener('input', calculate);
document.getElementById('zSize').addEventListener('input', calculate);
