var li_items = document.querySelectorAll(".accordion_wrap ul li");
var ul = document.querySelector(".accordion_wrap ul");

li_items.forEach(function(item){
	item.addEventListener("click", function(){
		li_items.forEach(function(item){
			item.classList.remove("active");
		})
		item.classList.add("active");
	});
});

ul.addEventListener("mouseleave", function(){
	li_items.forEach(function(item){
		item.classList.remove("active");
	})
});
