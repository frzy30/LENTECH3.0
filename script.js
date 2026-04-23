let cart = [];

        function openCart() {
            document.getElementById('cart-panel').classList.add('open');
            document.getElementById('overlay').style.display = 'block';
        }

        function closeCart() {
            document.getElementById('cart-panel').classList.remove('open');
            document.getElementById('overlay').style.display = 'none';
        }

        function addToCart(name, price) {
            cart.push({name, price});
            updateUI();
            openCart();
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateUI();
        }

        function updateUI() {
            const list = document.getElementById('cart-list');
            list.innerHTML = "";
            let total = 0;
            
            if(cart.length === 0) {
                list.innerHTML = '<p style="color:#444; text-align: center; margin-top: 40px;">Tray is empty.</p>';
            } else {
                cart.forEach((item, i) => {
                    total += item.price;
                    list.innerHTML += `
                        <div class="cart-item">
                            <div style="flex-grow:1;">
                                <h4 style="font-size:0.9rem;">${item.name}</h4>
                                <span style="font-size:0.8rem; color:var(--primary); font-weight:700;">₱${item.price.toLocaleString()}</span>
                            </div>
                            <button onclick="removeFromCart(${i})" style="background:none; border:none; color:#ff4444; cursor:pointer; font-size:1.2rem;">×</button>
                        </div>`;
                });
            }
            document.getElementById('cart-count').innerText = cart.length;
            document.getElementById('cart-total').innerText = "₱" + total.toLocaleString();
        }