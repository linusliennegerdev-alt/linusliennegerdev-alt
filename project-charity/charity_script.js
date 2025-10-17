
        // 1. Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                 mobileMenu.classList.add('hidden');
            });
        });
        


        // 3. Header shadow on scroll
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // 4. Animate elements on scroll
        const scrollElements = document.querySelectorAll(".animate-on-scroll");
        const elementInView = (el, dividend = 1) => {
            const elementTop = el.getBoundingClientRect().top;
            return (
                elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
            );
        };
        const displayScrollElement = (element) => {
            element.classList.add("is-visible");
        };
        const handleScrollAnimation = () => {
            scrollElements.forEach((el) => {
                if (elementInView(el, 1.25)) {
                    displayScrollElement(el);
                }
            })
        }
        window.addEventListener("scroll", () => { 
            handleScrollAnimation();
        });

        // 5. Impact Slider Logic
        const slider = document.getElementById('impact-slider');
        if (slider) {
            const donationValue = document.getElementById('donation-value');
            const impactText = document.getElementById('impact-text');
            const impactIcon = document.getElementById('impact-icon');

            const impacts = [
                { value: 5, icon: '🎨', text: 'A set of art supplies for one child!' },
                { value: 20, icon: '📚', text: 'A collection of storybooks for a small library.' },
                { value: 40, icon: '🍎', text: 'A week of healthy lunches for a child.' },
                { value: 60, icon: '🧸', text: 'A giant teddy bear for a hospital playroom!' },
                { value: 80, icon: '⚽️', text: 'Sports equipment for an entire class.' },
                { value: 100, icon: '🎉', text: 'A surprise birthday party for a child in need!' }
            ];

            slider.addEventListener('input', (e) => {
                const value = parseInt(e.target.value);
                donationValue.textContent = `$${value}`;
                
                let currentImpact = impacts[0];
                for (const impact of impacts) {
                    if (value >= impact.value) {
                        currentImpact = impact;
                    }
                }
                
                impactIcon.textContent = currentImpact.icon;
                impactText.textContent = currentImpact.text;
                
                impactIcon.style.transform = `scale(1.2) rotate(${value % 20 - 10}deg)`;
                setTimeout(() => {
                    impactIcon.style.transform = 'scale(1) rotate(0deg)';
                }, 150);
            });
        }

        // 6. Donation Amount Logic
        const donationButtons = document.querySelectorAll('.donation-amount');
        const customAmountInput = document.getElementById('custom-amount');

        donationButtons.forEach(button => {
            button.addEventListener('click', () => {
                const amountText = button.textContent;
                if (amountText === '?') {
                    customAmountInput.classList.toggle('hidden');
                    customAmountInput.focus();
                } else {
                    const amount = amountText.replace('$', '');
                    customAmountInput.value = amount;
                    if (customAmountInput.classList.contains('hidden')) {
                        customAmountInput.classList.remove('hidden');
                    }
                }
            });
        });
