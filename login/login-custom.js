		document.getElementById('login-form').addEventListener('submit', function(e) {
			e.preventDefault();
			var login_btn = document.getElementById('login-btn')
			var login_txt = document.getElementById('login-text')
			var email_input = document.getElementById('login-email');
			var pass_input = document.getElementById('login-pass');
			var email_warning = document.getElementById('email-warning');
			login_txt.innerHTML = '';
			login_txt.classList.add('spin');
			// replacement for ajax call to log in
			setTimeout(function(){
				if('asdf@asdf' == email_input.value && 'asdf' == pass_input.value) {
					login_txt.style.transition = 'opacity 0.3s';
					login_txt.style.opacity = 0;
					setTimeout(function() {
						login_txt.classList.remove('spin');
						login_txt.innerHTML = '&#x2705;';
						setTimeout(function() {
							login_txt.style.transition = 'opacity 0.45s';
							login_btn.disabled = true;
							login_txt.style.opacity = 1;
						}, 100);
					}, 150);
						/*
					*/
				} else {
					setTimeout(function() {
						login_txt.style.transition = 'opacity 0.3s';
						login_txt.style.opacity = 0;
						setTimeout(function() {
							shift(email_input);
							shift(pass_input);
							shift(login_btn);
							login_txt.classList.remove('spin');
							login_txt.innerHTML = 'login';
							login_txt.style.transition = 'opacity 0.25s';
							login_txt.style.opacity = 1;
							error_msg(document.getElementById('email-warning'),'Invalid login.')
							email_input.value = '';
							pass_input.value = '';
							email_input.focus();
						}, 300);
					}, 150);
				}
			} , 1000);
		});

		document.getElementById('login-email').addEventListener('invalid', function(e) {
			e.preventDefault();
			error_msg(document.getElementById('email-warning'),"Please enter a valid email.");
			shift(this);
			input_focus();
		});

		document.getElementById('login-email').addEventListener('change', function(e) {
			clear_msg(this, document.getElementById('email-warning'));
		});

		document.getElementById('login-pass').addEventListener('invalid', function(e) {
			e.preventDefault();
			error_msg(document.getElementById('pass-warning'),"Please enter a password.");
			shift(this);
			input_focus();
		});

		document.getElementById('login-pass').addEventListener('change', function(e) {
			clear_msg(this, document.getElementById('pass-warning'));
		});

		function shift(element) {
			element.classList.add('shift');
			setTimeout(function() {
				element.classList.remove('shift');
			}, 1010);
		}

		function error_msg(element, msg) {
			element.innerHTML = msg;
			element.style.transition = 'opacity 0.5s';
			element.style.opacity = '1';
		}

		function clear_msg(element, warning_element) {
			element.setCustomValidity('');
			warning_element.style.transition = 'opacity 0.25s';
			warning_element.style.opacity = '0';
		}

		function input_focus() {
			document.querySelectorAll("input:invalid")[0].focus();
		}
