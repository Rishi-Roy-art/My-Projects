const button_element = document.querySelector(".Button");

button_element.addEventListener("mouseover", (event) => {
    const y = event.pageY - button_element.offsetTop;
    const x = event.pageX - button_element.offsetLeft;

    //This is the last obstacle, i somwhow need to grab the contants and put them in place of the --xPos and --yPos variables.
     //working output:
    button_element.style.setProperty("--xPos", x + "px");
     //button_element.style.setProperty("--yPos", y + "px");
    button_element.style.setProperty("--yPos", y + "px");

    //This is working now, I dont know why it was not taking style.setProperty a while ago. it was automatically getting changed to some different method which had no relation to the current project.
});