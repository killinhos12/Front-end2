const PRODUCTS=[
  {id:1,name:'Burger Supremo',emoji:'🍔',cat:'Lanches',bg:'#FFF0E6',price:24.90,rating:4.9,time:25,timeStr:'25–35 min',desc:'Duplo blend, queijo cheddar derretido, bacon crocante, molho especial',badge:'🔥 Mais pedido',old:29.90},
  {id:2,name:'Pizza Calabresa',emoji:'🍕',cat:'Pizza',bg:'#FFF8E1',price:39.90,rating:4.8,time:35,timeStr:'30–45 min',desc:'Molho caseiro, calabresa artesanal, azeitonas, cebola caramelizada',badge:null,old:null},
  {id:3,name:'Wrap Fitness',emoji:'🌯',cat:'Saudável',bg:'#E8F5E9',price:19.90,rating:4.7,time:22,timeStr:'20–30 min',desc:'Frango grelhado, alface americana, tomate cereja, cream cheese light',badge:'💚 Saudável',old:null},
  {id:4,name:'Combo Sushi 8pç',emoji:'🍣',cat:'Japonês',bg:'#FCE4EC',price:49.90,rating:4.9,time:45,timeStr:'40–55 min',desc:'Salmão, atum, camarão grelhado, molho tarê especial, gengibre',badge:'⭐ Top',old:64.90},
  {id:5,name:'Açaí 500ml',emoji:'🫐',cat:'Sobremesa',bg:'#EDE7F6',price:18.90,rating:4.6,time:18,timeStr:'15–25 min',desc:'Açaí puro da Amazônia, granola crocante, banana, leite condensado',badge:null,old:null},
  {id:6,name:'Smoothie Verde',emoji:'🥤',cat:'Bebidas',bg:'#E8F5E9',price:14.90,rating:4.5,time:12,timeStr:'10–20 min',desc:'Espinafre fresco, maçã verde, gengibre, limão siciliano, sementes de chia',badge:'💚 Saudável',old:null},
  {id:7,name:'Tacos (2un)',emoji:'🌮',cat:'Mexicano',bg:'#E0F7FA',price:22.90,rating:4.7,time:28,timeStr:'25–35 min',desc:'Carne moída temperada, pico de gallo, guacamole fresco, tortilla artesanal',badge:null,old:null},
  {id:8,name:'Frango Crocante',emoji:'🍗',cat:'Lanches',bg:'#FFF0EC',price:29.90,rating:4.8,time:30,timeStr:'25–35 min',desc:'Frango frito no estilo coreano, molho de alho especial, pickles artesanais',badge:'🆕 Novo',old:null},
  {id:9,name:'Pizza Margherita',emoji:'🍕',cat:'Pizza',bg:'#FFF8E1',price:35.90,rating:4.7,time:38,timeStr:'30–45 min',desc:'Tomate San Marzano importado, muçarela de búfala fresca, manjericão',badge:null,old:null},
  {id:10,name:'Milk Shake',emoji:'🥛',cat:'Bebidas',bg:'#F3E5F5',price:16.90,rating:4.6,time:15,timeStr:'15–20 min',desc:'Chocolate belga, baunilha bourbon ou morango — escolha o seu sabor',badge:null,old:null},
  {id:11,name:'Ramen Especial',emoji:'🍜',cat:'Japonês',bg:'#FFF8E1',price:38.90,rating:4.8,time:40,timeStr:'35–50 min',desc:'Caldo tonkotsu 12h, chashu de porco, ovo marinado, nori, cebolinha',badge:'🔥 Mais pedido',old:null},
  {id:12,name:'Poke Bowl',emoji:'🥣',cat:'Saudável',bg:'#E8F5E9',price:32.90,rating:4.7,time:20,timeStr:'15–25 min',desc:'Salmão fresco, arroz sushi, edamame, abacate, pepino, molho ponzu',badge:'💚 Saudável',old:null},
];
const RESTAURANTS=[
  {name:'Frango & Cia',emoji:'🍗',bg:'#FFF0EC',rating:4.6,dist:'0.8km',time:'20–30 min',free:'Frete grátis acima de R$ 30',cat:'Lanches',open:true,tags:['Lanches','Frango','Combo']},
  {name:'Tacos do Norte',emoji:'🌮',bg:'#FFF8E1',rating:4.5,dist:'1.2km',time:'25–35 min',free:'2 tacos por R$ 18 🌶️',cat:'Mexicano',open:true,tags:['Mexicano','Picante','Vegan']},
  {name:'Cantina Italiana',emoji:'🍜',bg:'#E3F2FD',rating:4.8,dist:'1.5km',time:'35–50 min',free:'Frete grátis hoje 🎉',cat:'Pizza',open:true,tags:['Italiano','Pizza','Massa']},
  {name:'Sushi Premium',emoji:'🍣',bg:'#FCE4EC',rating:4.9,dist:'2.0km',time:'40–55 min',free:'Combo especial R$ 69,90',cat:'Japonês',open:true,tags:['Japonês','Sushi','Premium']},
  {name:'Bowl Saudável',emoji:'🥗',bg:'#E8F5E9',rating:4.7,dist:'0.6km',time:'15–25 min',free:'Delivery grátis todo dia',cat:'Saudável',open:true,tags:['Saudável','Vegano','Fit']},
  {name:'Doce Encanto',emoji:'🍰',bg:'#FCE4EC',rating:4.6,dist:'1.8km',time:'20–35 min',free:'Sobremesas premium',cat:'Sobremesa',open:false,tags:['Doces','Bolos','Especial']},
];
const LOCATIONS=[
  {name:'Diadema, SP',addr:'Centro, Diadema — SP'},
  {name:'Santo André, SP',addr:'Centro, Santo André — SP'},
  {name:'São Bernardo do Campo, SP',addr:'Centro, São Bernardo — SP'},
  {name:'São Paulo, SP',addr:'Capital — SP'},
  {name:'Mauá, SP',addr:'Centro, Mauá — SP'},
  {name:'Ribeirão Pires, SP',addr:'Centro, Ribeirão Pires — SP'},
  {name:'Guarulhos, SP',addr:'Centro, Guarulhos — SP'},
  {name:'Campinas, SP',addr:'Centro, Campinas — SP'},
  {name:'Barueri, SP',addr:'Alphaville, Barueri — SP'},
  {name:'Osasco, SP',addr:'Centro, Osasco — SP'},
];
const ORDERS_ACTIVE=[
  {id:'#8821',rest:'Burger Supremo',items:['1x Burger Supremo','1x Milk Shake'],total:41.80,status:'transit',date:'Hoje, 19:42',steps:[true,true,false,false],eta:'~18 min'},
];
const ORDERS_PAST=[
  {id:'#8810',rest:'Cantina Italiana',items:['1x Carbonara','2x Bruschetta'],total:68.50,status:'delivered',date:'Ontem, 20:15',steps:[true,true,true,true],eta:null},
  {id:'#8795',rest:'Sushi Premium',items:['1x Combo Sushi 8pç','1x Sashimi Mix'],total:89.80,status:'delivered',date:'12/04, 13:30',steps:[true,true,true,true],eta:null},
  {id:'#8760',rest:'Bowl Saudável',items:['1x Wrap Fitness','1x Smoothie Verde'],total:34.80,status:'cancel',date:'10/04, 12:00',steps:[true,false,false,false],eta:null},
];
const COUPONS=[
  {code:'FRETE0',desc:'Frete grátis sem valor mínimo',detail:'Válido 1x por dia',exp:'Válido até 30/04',color:'#C01E06',emoji:'🛵'},
  {code:'PIZZA30',desc:'30% OFF em todas as pizzas',detail:'Pizzas acima de R$ 29,90',exp:'Hoje até 22h',color:'#7B2FBE',emoji:'🍕'},
  {code:'FIT20',desc:'20% OFF em pratos saudáveis',detail:'Categoria saudável',exp:'Válido até 20/04',color:'#0F6656',emoji:'🥗'},
  {code:'CAFE15',desc:'15% OFF no café da manhã',detail:'Todos os dias 6h–11h',exp:'Sem expiração',color:'#B85C00',emoji:'☕'},
  {code:'NOVO50',desc:'R$ 5 OFF no primeiro pedido',detail:'Novo usuário, 1x apenas',exp:'Válido até 31/12',color:'#1565C0',emoji:'🎁'},
];
const STEP_LABELS=['Pedido','Preparo','A caminho','Entregue'];

// ═══════════════════
// STATE
// ═══════════════════
let cart=[],favs=new Set([1,3,5]),activeFilter='todos',sortMode='popular',searchQuery='',payMethod='💳 Cartão';

// ═══════════════════
// UTILS
// ═══════════════════
const fmt=n=>n.toFixed(2).replace('.',',');

// ═══════════════════
// HOME
// ═══════════════════
function renderHome(){
  renderCards(PRODUCTS.slice(0,6));
  renderRests(RESTAURANTS);
}
function productCard(p){
  const isFav=favs.has(p.id);
  return`<div class="h-card">
    <div class="h-card-img" style="background:${p.bg}">
      ${p.badge?`<div class="h-card-badge">${p.badge}</div>`:''}
      <div class="h-card-fav" onclick="toggleFavCard(event,${p.id},this)">${isFav?'❤️':'🤍'}</div>
      ${p.emoji}
    </div>
    <div class="h-card-body">
      <div class="h-card-name">${p.name}</div>
      <div class="h-card-desc">${p.desc}</div>
      <div class="h-card-meta" style="margin-top:6px"><span class="badge-r">⭐ ${p.rating}</span> &nbsp;<span style="font-size:11px;color:var(--muted)">⏱ ${p.timeStr}</span></div>
      <div class="h-card-row">
        <div>
          <span class="h-card-price">R$ ${fmt(p.price)}</span>
          ${p.old?`<span class="h-card-old">R$ ${fmt(p.old)}</span>`:''}
        </div>
        <button class="add-btn" onclick="addToCart(${p.id})">+</button>
      </div>
    </div>
  </div>`;
}
function renderCards(prods){
  document.getElementById('popular-cards').innerHTML=prods.length?prods.map(productCard).join(''):'<div style="padding:20px;color:var(--muted)">Nenhum item nessa categoria.</div>';
}
function renderRests(rests){
  document.getElementById('rest-list').innerHTML=rests.length?rests.map(r=>`
    <div class="rest-row" onclick="showToast('🏪 Abrindo ${r.name}...')">
      <div class="rest-ico" style="background:${r.bg}">${r.emoji}
        <div class="rest-open">${r.open?'Aberto':'Fechado'}</div>
      </div>
      <div style="flex:1">
        <div class="rest-name">${r.name}</div>
        <div class="rest-meta"><span class="badge-r">⭐ ${r.rating}</span> · ${r.dist} · ${r.time}</div>
        <div class="rest-tags">${r.tags.map(t=>`<span class="rest-tag">${t}</span>`).join('')}</div>
        <div style="font-size:12px;color:var(--red);font-weight:700;margin-top:5px">${r.free}</div>
      </div>
      <div class="rest-arr">›</div>
    </div>`).join(''):'<div style="padding:20px;color:var(--muted)">Nenhum restaurante encontrado.</div>';
}

// Category filter
function filterCat(el,cat){
  document.querySelectorAll('#cat-grid .cat-tile').forEach(c=>c.classList.remove('active'));
  el.classList.add('active');
  const prods=cat==='Todos'?PRODUCTS.slice(0,6):PRODUCTS.filter(p=>p.cat===cat).slice(0,6);
  renderCards(prods);
  const rests=cat==='Todos'?RESTAURANTS:RESTAURANTS.filter(r=>r.cat===cat);
  renderRests(rests);
}

// Banner dots
function scrollBanner(i){
  const b=document.getElementById('hero-banners');
  const w=b.querySelector('.hero-banner').offsetWidth+14;
  b.scrollTo({left:i*w,behavior:'smooth'});
  document.querySelectorAll('.hb-dot').forEach((d,idx)=>d.classList.toggle('active',idx===i));
}
function initBannerScroll(){
  const b=document.getElementById('hero-banners');
  b.addEventListener('scroll',()=>{
    const w=b.querySelector('.hero-banner').offsetWidth+14;
    const i=Math.round(b.scrollLeft/w);
    document.querySelectorAll('.hb-dot').forEach((d,idx)=>d.classList.toggle('active',idx===i));
  });
}

// ═══════════════════
// TABS
// ═══════════════════
function goTab(tab){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.getElementById('page-'+tab).classList.add('active');
  const nav=document.getElementById('nav-'+tab);
  if(nav){nav.classList.add('active')}
  if(tab==='orders')renderOrders();
  if(tab==='favs')renderFavs();
  if(tab==='search')renderSearch();
  if(tab==='coupons')renderCoupons();
}

// ═══════════════════
// SEARCH & SORT
// ═══════════════════
function onSearch(val){
  searchQuery=val;
  document.getElementById('search-clear').style.display=val?'block':'none';
  if(document.getElementById('page-search').classList.contains('active'))renderSearch();
  else goTab('search');
}
function clearSearch(){
  document.getElementById('search-input').value='';
  searchQuery='';
  document.getElementById('search-clear').style.display='none';
  renderSearch();
}
function setFilter(el,f){
  activeFilter=f;
  document.querySelectorAll('#filter-bar .filter-pill').forEach(p=>p.classList.remove('active'));
  el.classList.add('active');renderSearch();
}
function setSort(el,s){
  sortMode=s;
  document.querySelectorAll('.sort-btn').forEach(b=>b.classList.remove('active'));
  el.classList.add('active');renderSearch();
}
function renderSearch(){
  const q=searchQuery.toLowerCase();
  const catMap={todos:null,lanches:'Lanches',pizza:'Pizza',japones:'Japonês',saudavel:'Saudável',sobremesa:'Sobremesa',bebidas:'Bebidas',mexicano:'Mexicano'};
  const catF=catMap[activeFilter];
  let res=PRODUCTS.filter(p=>{
    const mq=!q||p.name.toLowerCase().includes(q)||p.cat.toLowerCase().includes(q)||p.desc.toLowerCase().includes(q);
    const mc=!catF||p.cat===catF;
    return mq&&mc;
  });
  if(sortMode==='price')res=[...res].sort((a,b)=>a.price-b.price);
  else if(sortMode==='time')res=[...res].sort((a,b)=>a.time-b.time);
  else res=[...res].sort((a,b)=>b.rating-a.rating);
  const c=document.getElementById('search-results');
  if(!res.length){
    c.innerHTML=`<div class="search-empty"><div style="font-size:56px;margin-bottom:14px">🔍</div><div style="font-weight:900;font-size:16px">Nenhum resultado</div><div style="font-size:13px;margin-top:8px">Tente outro termo ou categoria</div></div>`;
    return;
  }
  c.innerHTML=`<div style="padding:4px 0 10px;font-size:13px;color:var(--muted)">${res.length} resultado${res.length!==1?'s':''} encontrado${res.length!==1?'s':''}</div>
  <div class="rest-list">${res.map(p=>`
    <div class="rest-row">
      <div style="width:62px;height:62px;background:${p.bg};border-radius:16px;font-size:32px;display:flex;align-items:center;justify-content:center;flex-shrink:0;position:relative">
        ${p.emoji}
        ${favs.has(p.id)?'<div style="position:absolute;top:-4px;right:-4px;font-size:12px">❤️</div>':''}
      </div>
      <div style="flex:1">
        <div class="rest-name">${p.name} ${p.badge?`<span style="font-size:11px;font-weight:700;color:var(--orange)">${p.badge}</span>`:''}</div>
        <div class="rest-meta"><span class="badge-r">⭐ ${p.rating}</span> · ⏱ ${p.timeStr} · ${p.cat}</div>
        <div style="font-size:12px;color:var(--muted);margin-top:3px;line-height:1.4">${p.desc}</div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;flex-shrink:0">
        <div>
          <div style="font-weight:900;color:var(--red);font-size:15px">R$ ${fmt(p.price)}</div>
          ${p.old?`<div style="font-size:11px;color:var(--muted);text-decoration:line-through">R$ ${fmt(p.old)}</div>`:''}
        </div>
        <button class="add-btn" onclick="addToCart(${p.id})">+</button>
      </div>
    </div>`).join('')}</div>`;
}

// ═══════════════════
// ORDERS
// ═══════════════════
function renderOrders(){
  document.getElementById('orders-dot').classList.remove('show');
  const ao=document.getElementById('active-orders');
  ao.innerHTML=ORDERS_ACTIVE.length?ORDERS_ACTIVE.map(orderCard).join(''):`<div style="text-align:center;padding:48px 20px;color:var(--muted)"><div style="font-size:52px;margin-bottom:12px">📦</div><div style="font-weight:800;font-size:16px">Nenhum pedido ativo</div><div style="font-size:13px;margin-top:6px">Seus pedidos em andamento aparecerão aqui</div></div>`;
  document.getElementById('past-orders').innerHTML=ORDERS_PAST.map(orderCard).join('');
}
function orderCard(o){
  const lbl={delivered:'Entregue ✓',transit:'A caminho 🛵',cancel:'Cancelado ✕',preparing:'Preparando 👨‍🍳'}[o.status];
  const cls={delivered:'status-d',transit:'status-t',cancel:'status-c',preparing:'status-p'}[o.status];
  const stepsHtml=o.steps.map((done,i)=>{
    const isNow=!done&&i>0&&o.steps[i-1];
    return`${i>0?`<div class="ps-line${o.steps[i-1]?' done':''}"></div>`:''}
    <div class="ps"><div class="ps-dot${done?' done':isNow?' now':''}">${done?'✓':i+1}</div><div class="ps-lbl">${STEP_LABELS[i]}</div></div>`;
  }).join('');
  const actions={
    delivered:`<button class="order-btn ob-out" onclick="showToast('⭐ Avaliação enviada!')">⭐ Avaliar</button><button class="order-btn ob-red" onclick="showToast('🔄 Adicionando ao carrinho...')">🔄 Pedir novamente</button>`,
    transit:`<button class="order-btn ob-out" onclick="showToast('📍 Abrindo rastreamento...')">📍 Rastrear</button><button class="order-btn ob-red" onclick="showToast('📞 Conectando suporte...')">📞 Suporte</button>`,
    cancel:`<button class="order-btn ob-dark" style="flex:1" onclick="showToast('🔄 Refazendo pedido...')">🔄 Refazer pedido</button>`,
    preparing:`<button class="order-btn ob-out" onclick="showToast('📞 Suporte ativo...')">📞 Suporte</button>`,
  }[o.status]||'';
  return`<div class="order-card">
    <div class="order-hdr">
      <div>
        <div class="order-name">${o.rest} ${o.id}</div>
        <div class="order-date">${o.date}${o.eta?` · ETA: ${o.eta}`:''}</div>
      </div>
      <div class="order-status ${cls}">${lbl}</div>
    </div>
    <hr class="order-divider">
    <div class="order-items">${o.items.join('<br>')}</div>
    <div class="order-total">Total: R$ ${fmt(o.total)}</div>
    ${o.status==='transit'||o.status==='preparing'?`<div class="prog-wrap"><div class="prog-title">Acompanhe seu pedido</div><div class="prog-steps">${stepsHtml}</div></div>`:''}
    <div class="order-actions">${actions}</div>
  </div>`;
}
function showOrderTab(el,tid){
  document.querySelectorAll('.order-tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  ['active-orders','past-orders'].forEach(id=>document.getElementById(id).style.display='none');
  document.getElementById(tid).style.display='block';
}

// ═══════════════════
// FAVS
// ═══════════════════
function renderFavs(){
  const fg=document.getElementById('fav-grid');
  const fp=PRODUCTS.filter(p=>favs.has(p.id));
  document.getElementById('fav-count').textContent=fp.length?`${fp.length} itens`:'';
  document.getElementById('ps-favs').textContent=favs.size;
  fg.innerHTML=fp.length?fp.map(p=>`
    <div class="fav-card">
      <div class="fav-heart" onclick="toggleFav(${p.id},this)">❤️</div>
      <div class="fav-img" style="background:${p.bg}">${p.emoji}</div>
      <div class="fav-body">
        <div class="fav-name">${p.name}</div>
        <div class="fav-meta"><span class="badge-r">⭐ ${p.rating}</span> · ${p.timeStr}</div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:9px">
          <div style="font-weight:900;color:var(--red);font-size:14px">R$ ${fmt(p.price)}</div>
          <button class="add-btn" onclick="addToCart(${p.id})">+</button>
        </div>
      </div>
    </div>`).join(''):`<div style="grid-column:span 2;text-align:center;padding:52px 20px;color:var(--muted)"><div style="font-size:52px;margin-bottom:12px">❤️</div><div style="font-weight:800;font-size:16px">Nenhum favorito ainda</div><div style="font-size:13px;margin-top:6px">Toque no 🤍 em qualquer item!</div></div>`;
}
function toggleFav(id,el){
  if(favs.has(id)){favs.delete(id);el.textContent='🤍';showToast('💔 Removido dos favoritos')}
  else{favs.add(id);el.textContent='❤️';showToast('❤️ Adicionado aos favoritos!')}
  document.getElementById('ps-favs').textContent=favs.size;
}
function toggleFavCard(e,id,el){
  e.stopPropagation();
  if(favs.has(id)){favs.delete(id);el.textContent='🤍';showToast('💔 Removido dos favoritos')}
  else{favs.add(id);el.textContent='❤️';showToast('❤️ Adicionado aos favoritos!')}
  document.getElementById('ps-favs').textContent=favs.size;
}

// ═══════════════════
// COUPONS
// ═══════════════════
function renderCoupons(){
  document.getElementById('coupons-list').innerHTML=COUPONS.map(c=>`
    <div class="coupon-card" onclick="copyCoupon('${c.code}')">
      <div class="coupon-left" style="background:${c.color}22">${c.emoji}</div>
      <div class="coupon-mid">
        <div class="coupon-code" style="color:${c.color}">${c.code}</div>
        <div class="coupon-desc">${c.desc}</div>
        <div style="font-size:11px;color:var(--muted);margin-top:2px">${c.detail}</div>
        <div class="coupon-exp">⏰ ${c.exp}</div>
      </div>
      <div class="coupon-right">
        <div class="coupon-divider"></div>
        <button class="coupon-copy" style="background:${c.color}">COPIAR</button>
      </div>
    </div>`).join('');
}
function copyCoupon(code){
  navigator.clipboard&&navigator.clipboard.writeText(code).catch(()=>{});
  showToast(`✅ Cupom ${code} copiado!`);
}

// ═══════════════════
// CART
// ═══════════════════
function addToCart(id){
  const p=PRODUCTS.find(x=>x.id===id);
  const ex=cart.find(x=>x.id===id);
  if(ex)ex.qty++;else cart.push({...p,qty:1});
  updateCartBadge();
  showToast(`✅ ${p.emoji} ${p.name} adicionado!`);
}
function updateCartBadge(){
  const n=cart.reduce((s,i)=>s+i.qty,0);
  const b=document.getElementById('cart-count');
  b.textContent=n;b.classList.toggle('show',n>0);
}
function openCart(){document.getElementById('cart-overlay').classList.add('open');renderCart()}
function closeCart(){document.getElementById('cart-overlay').classList.remove('open')}
function renderCart(){
  const body=document.getElementById('cart-body'),footer=document.getElementById('cart-footer');
  if(!cart.length){
    body.innerHTML=`<div class="cart-empty"><div style="font-size:56px;margin-bottom:14px">🛒</div><div style="font-weight:800;font-size:16px">Carrinho vazio</div><div style="font-size:13px;margin-top:6px">Adicione itens para começar!</div><button style="margin-top:18px;background:var(--red);color:#fff;border:none;border-radius:14px;padding:11px 24px;font-size:14px;font-weight:800;cursor:pointer;font-family:Nunito,sans-serif" onclick="closeCart();goTab('home')">Ver cardápio</button></div>`;
    footer.style.display='none';return;
  }
  footer.style.display='block';
  body.innerHTML=cart.map(item=>`
    <div class="cart-item">
      <div class="ci-ico" style="background:${item.bg}">${item.emoji}</div>
      <div style="flex:1">
        <div class="ci-name">${item.name}</div>
        <div class="ci-price">R$ ${fmt(item.price*item.qty)}</div>
        <div class="ci-qty">
          <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
          <div class="qty-n">${item.qty}</div>
          <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
        </div>
      </div>
    </div>`).join('');
  // Note field
  body.innerHTML+=`<div class="cart-note"><span style="font-size:16px">📝</span><input placeholder="Observação para o restaurante..."></div>`;
  const sub=cart.reduce((s,i)=>s+i.price*i.qty,0);
  const disc=sub>50?5:0;
  document.getElementById('cart-sub').textContent='R$ '+fmt(sub);
  document.getElementById('cart-discount').textContent=disc?`−R$ ${fmt(disc)}`:'−R$ 0,00';
  document.getElementById('cart-total-val').textContent='R$ '+fmt(sub-disc);
  document.getElementById('checkout-btn').textContent=`🛵 Finalizar Pedido · R$ ${fmt(sub-disc)}`;
}
function changeQty(id,d){
  const item=cart.find(i=>i.id===id);if(!item)return;
  item.qty+=d;
  if(item.qty<=0){cart=cart.filter(i=>i.id!==id);showToast('🗑️ Item removido')}
  updateCartBadge();renderCart();
}
function setPay(el,method){
  payMethod=method;
  document.querySelectorAll('.pay-btn').forEach(b=>b.classList.remove('active'));
  el.classList.add('active');
  showToast(`✅ Pagamento: ${method}`);
}
function checkout(){
  const n=cart.reduce((s,i)=>s+i.qty,0);
  if(!n)return;
  cart=[];updateCartBadge();closeCart();
  document.getElementById('orders-dot').classList.add('show');
  showToast(`🛵 Pedido realizado via ${payMethod}! Acompanhe em Pedidos`);
  setTimeout(()=>goTab('orders'),1400);
}

// ═══════════════════
// LOCATION
// ═══════════════════
function openLocModal(){
  document.getElementById('loc-modal').classList.add('open');
  document.getElementById('loc-input').value='';
  renderLocSugs(LOCATIONS);
  setTimeout(()=>document.getElementById('loc-input').focus(),300);
}
function closeLocModal(){document.getElementById('loc-modal').classList.remove('open')}
function filterLocs(val){
  const q=val.toLowerCase();
  renderLocSugs(q?LOCATIONS.filter(l=>l.name.toLowerCase().includes(q)||l.addr.toLowerCase().includes(q)):LOCATIONS);
}
function renderLocSugs(locs){
  document.getElementById('loc-suggestions').innerHTML=locs.length?locs.map(l=>`
    <div class="loc-sug" onclick="selectLoc('${l.name}')">
      <div class="loc-sug-ico">📍</div>
      <div><div class="loc-sug-name">${l.name}</div><div class="loc-sug-addr">${l.addr}</div></div>
    </div>`).join(''):`<div style="padding:16px;color:var(--muted);text-align:center">Nenhum endereço encontrado</div>`;
}
function selectLoc(name){
  document.getElementById('loc-display').textContent=name;
  document.getElementById('prof-addr').textContent=name;
  closeLocModal();showToast(`📍 Entregando em ${name}`);
}
function useGPS(){
  closeLocModal();showToast('📡 Detectando localização...');
  setTimeout(()=>{selectLoc('Diadema, SP');},1500);
}

// ═══════════════════
// PROFILE
// ═══════════════════
function editProfile(){
  const n=prompt('Seu nome:',document.getElementById('prof-name').textContent);
  if(n&&n.trim()){
    document.getElementById('prof-name').textContent=n.trim();
    const email=prompt('Seu e-mail:',document.getElementById('prof-email').textContent);
    if(email&&email.trim())document.getElementById('prof-email').textContent=email.trim();
    showToast('✅ Perfil atualizado!');
  }
}

// ═══════════════════
// TOAST
// ═══════════════════
let toastT;
function showToast(msg){
  const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');
  clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove('show'),3000);
}

// ═══════════════════
// LOADER ANIMATION
// ═══════════════════
const sw=document.getElementById('stars-wrap');
for(let i=0;i<80;i++){
  const s=document.createElement('div');s.className='star';
  const sz=Math.random()*2.8+.5;
  const a=.08+Math.random()*.35,b=a+Math.random()*.45;
  s.style.cssText=`width:${sz}px;height:${sz}px;top:${Math.random()*70}%;left:${Math.random()*100}%;--dur:${2+Math.random()*5}s;--a:${a};--b:${b}`;
  sw.appendChild(s);
}
const spw=document.getElementById('speed-wrap');
for(let i=0;i<10;i++){
  const sl=document.createElement('div');sl.className='sline';
  const w=30+Math.random()*80,b=68+Math.random()*50;
  sl.style.cssText=`width:${w}px;bottom:${b}px;left:${50+Math.random()*60}px;animation-delay:${Math.random()*.28}s;animation-duration:${.2+Math.random()*.15}s`;
  spw.appendChild(sl);
}
function playHorn(){
  try{
    const ctx=new(window.AudioContext||window.webkitAudioContext)();
    const b=(f,t,d)=>{
      const o=ctx.createOscillator(),g=ctx.createGain();
      o.connect(g);g.connect(ctx.destination);
      o.type='sawtooth';o.frequency.value=f;
      g.gain.setValueAtTime(0,ctx.currentTime+t);
      g.gain.linearRampToValueAtTime(.24,ctx.currentTime+t+.02);
      g.gain.linearRampToValueAtTime(0,ctx.currentTime+t+d);
      o.start(ctx.currentTime+t);o.stop(ctx.currentTime+t+d+.06);
    };
    b(392,0,.13);b(523,.14,.13);b(659,.28,.24);
  }catch(e){}
}
const me=document.getElementById('moto'),bar=document.getElementById('ld-bar');
const bang=document.getElementById('arrive-bang'),ld=document.getElementById('loader'),appEl=document.getElementById('app');
const statusMsgs=['Conectando ao servidor...','Carregando restaurantes...','Preparando seu cardápio...','Quase lá, aguarde...','Pronto para pedidos! 🚀'];
function ease(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}
let st=null;
function anim(ts){
  if(!st)st=ts;
  const p=Math.min((ts-st)/3200,1),e=ease(p);
  const W=ld.offsetWidth||window.innerWidth;
  me.style.left=(58+e*(W-148))+'px';
  bar.style.width=(e*100)+'%';
  const si=Math.min(Math.floor(e*statusMsgs.length),statusMsgs.length-1);
  document.getElementById('ld-status').textContent=statusMsgs[si];
  if(p<1){requestAnimationFrame(anim)}
  else{
    me.classList.remove('riding');spw.style.display='none';
    bang.style.display='block';bang.style.right=(W-me.offsetLeft-60)+'px';
    playHorn();
    setTimeout(()=>{
      ld.classList.add('hide');
      setTimeout(()=>{
        ld.style.display='none';
        appEl.classList.add('show');
        renderHome();renderSearch();renderOrders();renderFavs();renderCoupons();
        initBannerScroll();
      },800);
    },1000);
  }
}
setTimeout(()=>requestAnimationFrame(anim),400);
