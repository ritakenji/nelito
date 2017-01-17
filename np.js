
		window.onload = function () {
		
			var dt = document.getElementsByTagName("dt");
			var dd = document.getElementsByTagName("dd");
			
			for (var i=0; i < dt.length; i++) {					/* ABRIR */
			
				dt[i].onclick = function () {
				
					var dd = document.getElementsByTagName("dd");
					
					for (var i=0; i < dd.length; i++) {
						dd[i].style.display="none";
					}
					this.nextElementSibling.style.display = "block";
				}
			}	
			

			for (var i=0; i < dd.length; i++) {						/* FECHAR */
					
				var exit = dd[i].getElementsByClassName("exit");
				
				exit[0].onclick = function () {
					this.parentNode.style.display = "none"; 
				}
			}
			
			document.form.onsubmit = function(){
				return false;
				}
		}
