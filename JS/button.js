function toggleButtons(clickedButton, otherButton) {
    clickedButton.classList.add('bg-lime-300', 'text-black');
    clickedButton.classList.remove('bg-white', 'text-black', 'border', 'border-gray-400');
    otherButton.classList.add('bg-lime-300', 'text-black');
    otherButton.classList.remove('bg-white', 'text-black', 'border', 'border-gray-400');
}