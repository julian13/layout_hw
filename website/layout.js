
for (i=0; i< document.getElementsByTagName("a").length; i++) {
    href_text = document.getElementsByTagName("a")[i].getAttribute("href")
	href_text = href_text.replace(".html","")
    href_text = "#" + href_text
    href_text = document.getElementsByTagName("a")[i].setAttribute("href",href_text)
}

document.querySelectorAll("a[href='#absolute']")[0].addEventListener("click",function(){})
