let div = document.createElement('div');

div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';

// мы должны вставить элемент в документ, иначе размеры будут равны 0
document.body.append(div);

let scrollWidth = div.offsetWidth - div.clientWidth;
let root = document.documentElement;
root.style.setProperty('--spacing-end', scrollWidth + 'px');
div.remove();
const JSCCommon = {
	modalCall() {
		const link = ".link-modal-js";
		$(link).fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			autoFocus: false,
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад",
					// PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"
				},
			},
			beforeLoad: function () {
				$('.top-nav').addClass('spaced-right');
				console.log('open');
			},
			afterClose: function () {
				$('.top-nav').removeClass('spaced-right');
				console.log('close');
			},
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		})
		$.fancybox.defaults.backFocus = false;
		const linkModal = document.querySelectorAll(link);
		function addData() {
			linkModal.forEach(element => {
				element.addEventListener('click', () => {
					let modal = document.querySelector(element.getAttribute("href"));
					const data = element.dataset;

					function setValue(val, elem) {
						if (elem && val) {
							const el = modal.querySelector(elem)
							el.tagName == "INPUT"
								? el.value = val
								: el.innerHTML = val;
							// console.log(modal.querySelector(elem).tagName)
						}
					}
					setValue(data.title, '.ttu');
					setValue(data.text, '.after-headline');
					setValue(data.btn, '.btn');
					setValue(data.order, '.order');
				})
			})
		}
		if (linkModal) addData();
	},
	// /modalCall
	ifie() {
		var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
		if (isIE11) {
			document.body.insertAdjacentHTML("beforeend", '<div class="browsehappy">	<p class=" container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p></div>');
		}
	},
	heightwindow() {
		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
		let vh = window.innerHeight * 0.01;
		// Then we set the value in the --vh custom property to the root of the document
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		// We listen to the resize event
		window.addEventListener('resize', () => {
			// We execute the same script as before
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		}, { passive: true });
	},
};
const $ = jQuery;

function eventHandler() {
	let isMobile = (function (a) { return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)); })(navigator.userAgent || navigator.vendor || window.opera);

	JSCCommon.ifie();
	JSCCommon.modalCall();
	JSCCommon.heightwindow();

	function setFixedNav() {
		let topNav = document.querySelector('.top-nav');
		if (!topNav) return;
		window.scrollY > 0
			? topNav.classList.add('fixed')
			: topNav.classList.remove('fixed');
	}

	function whenResize() {
		setFixedNav();
	}

	window.addEventListener('scroll', () => {
		setFixedNav();

	}, { passive: true })
	window.addEventListener('resize', () => {
		whenResize();
	}, { passive: true });

	whenResize();

	//luckyone js
	if (!isMobile){
		let allBallItems = document.querySelectorAll('.ball-item-js');
		for (let item of allBallItems){
			let ball = item.querySelector('.sidebar-ball-js');
			item.addEventListener('mousemove', function (){
				if (!event.target.classList.contains('avoid-track-js')){
					ball.setAttribute("style", `top: ${event.offsetY}px; left: ${event.offsetX}px;`);
				}
			})
		}
	}

	$('.avoid-track-js').mouseenter(function (){
		$(this).closest('.ball-item-js').addClass('disabled');
	}).mouseleave(function (){
		$(this).closest('.ball-item-js').removeClass('disabled');
	});

	//mob menu
	$('.burger-js').click(function (){
		$('.burger-js').toggleClass('active');
		$('.mob-menu--js').toggleClass('active');
		$('body').toggleClass('fixed');
		$('.top-nav').toggleClass('spaced-right');
	});
	function mobMenuMissClick(){
		if(!event.target.closest('.mob-menu--js') && !event.target.closest('.burger-js')){
			closeMobMenu();
		}
	}
	function closeMobMenu(){
		$('.burger-js').removeClass('active');
		$('body').removeClass('fixed');
		$('.mob-menu--js').removeClass('active');
		$('.top-nav').removeClass('spaced-right');
	}
	document.body.addEventListener('click', mobMenuMissClick);
	$('.navMenu__link').click(function (){
		$('.navMenu__link').removeClass('active');
		$(this).addClass('active');
		closeMobMenu();
	});

	//typeIt
	$('.typeit-red-js').each(function (){
		//take the string, no subTags allow this way
		let thisTxt = this.getAttribute('data-type-txt') || this.innerHTML;
		//define how many symbs there are
		let thisLength = this.innerHTML.length
		//define speed
		let speed = 50;
		// 10 symbs will be printed for 10 * speed(thanks cap XD)
		let typeTime = thisLength * speed;

		//creare new instanse, this its element from each
		let thisTypeIt = new TypeIt(this, {
			strings: '',
			speed: speed,
			waitUntilVisible: true,
			loop: true,
			loopDelay: 2000,
		}).go();
	})

	if (isMobile) {
		let sOpportunitiesSlider = new Swiper('.sOpportunities-slider-js', {
			slidesPerView: 'auto',
			breakpoints: {
				0: {
					spaceBetween: 0,
				},
				// 992: {
				// 	spaceBetween: 20,
				// },
			},
		});
	}
	// we'd only like to use iScroll for mobile...
	var controller = new ScrollMagic.Controller();
	if (!isMobile) {
		var wipeAnimation = new TimelineMax().to("#sOpportunities  .swiper-wrapper", 1, { x: "-360%" });

		// create scene to pin and link animation
		new ScrollMagic.Scene({
			triggerElement: "#sOpportunities",
			triggerHook: "onLeave",
			duration: "330%"
		})
			.setPin("#sOpportunities")
			.setTween(wipeAnimation)
			// .addIndicators() // add indicators (requires plugin)
			.addTo(controller);

	};


	//sClients
	let sClientsSlider = {
		slidesPerView: 'auto',
		freeModeMomentum: true,

		breakpoints: {
			0: {
				spaceBetween: 12,
			},
			768: {
				spaceBetween: 24,
			},
			992: {
				spaceBetween: 20,
			},
		},

		loop: true,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
	};
	let sClientsSlider1 = new Swiper('.sClients-slider-js', {
		...sClientsSlider,
		speed: 10000,
	});
	let sClientsSlider2 = new Swiper('.sClients2-slider-js', {
		...sClientsSlider,
		speed: 5000,
	});
	//
	function makeDDGroup(ArrSelectors){
		for (let parentSelect of ArrSelectors){
			let parent = document.querySelector(parentSelect);
			if (parent){
				// childHeads, kind of funny))
				let ChildHeads = parent.querySelectorAll('.dd-head-js');
				$(ChildHeads).click(function (){
					let clickedHead = this;

					$(ChildHeads).each(function (){
						if (this === clickedHead){
							//parent element gain toggle class, style head change via parent
							$(this.parentElement).toggleClass('active');
							$(this.parentElement).find('.dd-content-js').slideToggle(function (){
								$(this).toggleClass('active');
							});
						}
						else{
							$(this.parentElement).removeClass('active');
							$(this.parentElement).find('.dd-content-js').slideUp(function (){
								$(this).removeClass('active');
							});
						}
					});

				});
			}
		}
	}
	makeDDGroup([
		'.sQuestions-dd-group-js'
	]);
	//modal trade
	let modalTradeThumb = new Swiper('.modal-trade-thumb-js', {
		slidesPerView: 'auto',
		spaceBetween: 12,

		//lazy
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 16,
		},

		observer: true,
		observeParents: true
	});
	let modalTradeSlider = new Swiper('.modal-trade-slider-js', {
		slidesPerView: 'auto',
		spaceBetween: 20,
		thumbs: {
			swiper: modalTradeThumb,
		},
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 3,
		},
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		observer: true,
		observeParents: true
	});

	let topNav = document.querySelector(".top-nav--js");
	function calcHeaderHeight() {
		document.documentElement.style.setProperty('--top-nav-height', `${topNav.offsetHeight}px`);
	}
	window.addEventListener('resize', calcHeaderHeight, { passive: true });
	window.addEventListener('scroll', calcHeaderHeight, { passive: true });
	calcHeaderHeight();

	//aside-menu-js
	let sidebarItems = document.querySelectorAll('.sidebar-box-js');
	let sidebar, boxParent, sidebarLinks;
	if (sidebarItems[0]){
		sidebar = document.querySelector('.aside-menu-js');
		boxParent = sidebarItems[0].parentElement;
		sidebarLinks = document.querySelectorAll('.aside-menu-js > ul > li > a');
	}

	let sideBarItemsMiddle = [];

	//vanilla scrollLik
	function smoothScroll(qSelector){
		let elements = document.querySelectorAll(qSelector);
		if (elements.length === 0) return

		for (let elem of elements){

			elem.addEventListener('click', function () {

				let destinyID = this.getAttribute('href'); //this.attributes.href.nodeValue
				event.preventDefault();

				let destinyElem = document.querySelector(destinyID);
				if (!destinyElem) return

				//!!!!!!!!!!!!
				let destinyTop = getCoords(destinyElem).top - topNav.offsetHeight - 10;

				window.scrollTo({
					top: destinyTop,
					behavior: "smooth"
				});

			});
		}
	}
	function getCoords(elem) { // crossbrowser version
		var box = elem.getBoundingClientRect();

		var body = document.body;
		var docEl = document.documentElement;

		var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
		var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

		var clientTop = docEl.clientTop || body.clientTop || 0;
		var clientLeft = docEl.clientLeft || body.clientLeft || 0;

		var top  = box.top +  scrollTop - clientTop;
		var left = box.left + scrollLeft - clientLeft;

		return { top: Math.round(top), left: Math.round(left) };
	}
	smoothScroll('.aside-menu-js > ul > li > a, .navMenu__link');

	function setSBItemMiddle(){
		for(let item of sidebarItems){
			sideBarItemsMiddle.push(item.getBoundingClientRect().top + item.offsetHeight / 2);
		}
	}

	if (sidebarItems.length > 0 && sidebarLinks.length > 0){
		window.addEventListener('resize', function (){
			setSBItemMiddle();
		}, {passive: true});
		setSBItemMiddle();
	}
	document.addEventListener('scroll', function (){
		if (isMobile) return
		let scrollTop = window.scrollY;

		//it calc window.scrollY
		let parentTop = boxParent.getBoundingClientRect().top + window.scrollY;

		let lastItemH = sidebarItems[sidebarItems.length - 1].offsetHeight;
		let headerHeight = topNav.offsetHeight;
		let scrolledToContainer = scrollTop + headerHeight + 30 > parentTop;
		let scrolledOverLastItem = scrollTop + headerHeight < parentTop + boxParent.offsetHeight - (lastItemH * 2 / 3) - 30;

		if (scrolledToContainer && scrolledOverLastItem){
			sidebar.style.top =  (scrollTop + headerHeight + 30 - parentTop) + 'px';
		}
		if (scrolledOverLastItem){
			sidebar.classList.add('active');
		}
		else{
			sidebar.classList.remove('active');
		}

		for(let [index, middle] of Object.entries(sideBarItemsMiddle)){
			let prev;
			if (index == 0){
				prev = 0;
			}
			else{
				prev = sideBarItemsMiddle[index - 1];
			}

			if (scrollTop < middle && scrollTop > prev){
				$(sidebarLinks).removeClass('active');
				sidebarLinks[index].classList.add('active');
			}
		}
	}, {passive: true});
	//wow
	window.onload = function () {
		document.body.classList.remove("loaded_hiding");

		let wow = new WOW({
			// mobile: false,
			animateClass: 'animate__animated',
		});
		setTimeout(() => {
			//$('.top-nav').removeClass("opacity-0");
			wow.init();
		}, 1000);
	};


	//end luckyone js
};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}
// $('document').load(function (){
// 	document.body.classList.remove("loaded_hiding");
// })