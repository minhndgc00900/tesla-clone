const fullpageEl = document.getElementById("fullpage");
const sectionContent = document.querySelector(".section__fixed .section__content");
const sectionAction = document.querySelector(".section__fixed .section__action__container");

const blurOverlay = document.querySelector(".blur__overlay");

new fullpage("#fullpage", {
	autoScrolling: true,
	scrollBar: true,
	afterRender() {
		fullpageEl.style.opacity = 1;
	},
	onLeave: function (origin, destination, direction, trigger) {
		const sections = [sectionContent, sectionAction];
		sections.forEach(section => {
			section.classList.remove("fadeIn");
			section.classList.add("fadeOut");
		})

		setTimeout(() => {
			const sectionFixedContent = document.getElementById("section-content");
			const sectionFixedAction = document.getElementById("section-action-container");
			const sectionFixedSubTitle = document.getElementById("section-content-subtitle");
			const sectionFixedPrimary = document.getElementById("section-action-primary");
			const sectionFixedSecondary = document.getElementById("section-action-secondary");

			const title = destination.item.querySelector('.section__content').getAttribute("data-title");
			const subTitle = destination.item.querySelector('.section__content').getAttribute("data-subtitle");
			const primary = destination.item.querySelector('.section__content').getAttribute("data-btn-primary");
			const secondary = destination.item.querySelector('.section__content').getAttribute("data-btn-secondary");

			document.getElementById("section-content-title").innerText = title;

			if (sectionFixedSubTitle) {
				sectionFixedSubTitle.remove();
			}
			if (subTitle) {
				//create a node and append to section content
				const node = document.createElement("h2");
				node.classList.add("section__content__subtitle");
				node.id = "section-content-subtitle";
				const textnode = document.createTextNode(subTitle);
				node.appendChild(textnode);

				sectionFixedContent.appendChild(node);
			}

			if (sectionFixedPrimary) {
				sectionFixedPrimary.remove();
			}
			if (primary) {
				//create a node and append to section content
				const node = document.createElement("a");
				node.classList.add("section__action__btn", "action__btn__primary");
				node.id = "section-action-primary";
				const textnode = document.createTextNode(primary);
				node.appendChild(textnode);

				sectionFixedAction.appendChild(node);
			}

			if (sectionFixedSecondary) {
				sectionFixedSecondary.remove();
			}
			if (subTitle) {
				//create a node and append to section content
				const node = document.createElement("h2");
				node.classList.add("section__action__btn", "action__btn__secondary");
				node.id = "section-action-secondary";
				const textnode = document.createTextNode(secondary);
				node.appendChild(textnode);

				sectionFixedAction.appendChild(node);
			}

			sections.forEach(section => {
				section.classList.remove("fadeOut");
				section.classList.add("fadeIn");
			})
		}, 250);
	}
});
