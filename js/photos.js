(function(html) {
const id = document.currentScript.getAttribute('data-photo-id');
const url = document.currentScript.getAttribute('data-photo-url');
const target = document.currentScript.getAttribute('data-target-id');
const container = document.querySelector(`#${target}`);
container.innerHTML = html;
openPhoto(id, url);
lazyload();
})(`
<li class="item " id="st102170" style="background-image: url('/photos/tint/ST102170-65ba1d.jpg')" title="ST102170">
  <img class="lazyload" data-src="/photos/thumbnail/ST102170-2a24a2.jpg" src="/photos/tint/ST102170-65ba1d.jpg" height="7952" width="5304" />
  <span class="full">
    <span style="background-image: url('/photos/large/ST102170-326dde.jpg')"></span>
  </span>
  <a class="open" href="/st102170" data-target="st102170">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/st102151" data-target="st102151" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/100</li>
    <li><span class="aperture"><em>f</em>/</span>4.5</li>
	</ul> -->
</li>
<li class="item " id="st102151" style="background-image: url('/photos/tint/ST102151-65ba1d.jpg')" title="ST102151">
  <img class="lazyload" data-src="/photos/thumbnail/ST102151-2a24a2.jpg" src="/photos/tint/ST102151-65ba1d.jpg" height="7952" width="5304" />
  <span class="full">
    <span style="background-image: url('/photos/large/ST102151-326dde.jpg')"></span>
  </span>
  <a class="open" href="/st102151" data-target="st102151">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/st102170" data-target="st102170" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/st102112-1" data-target="st102112-1" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/30</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li>
	</ul> -->
</li>
<li class="item " id="st102112-1" style="background-image: url('/photos/tint/ST102112-1-65ba1d.jpg')" title="ST102112-1">
  <img class="lazyload" data-src="/photos/thumbnail/ST102112-1-2a24a2.jpg" src="/photos/tint/ST102112-1-65ba1d.jpg" height="3950" width="7900" />
  <span class="full">
    <span style="background-image: url('/photos/large/ST102112-1-326dde.jpg')"></span>
  </span>
  <a class="open" href="/st102112-1" data-target="st102112-1">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/st102151" data-target="st102151" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/st101931" data-target="st101931" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/1</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li>
	</ul> -->
</li>
<li class="item " id="st101931" style="background-image: url('/photos/tint/ST101931-65ba1d.jpg')" title="ST101931">
  <img class="lazyload" data-src="/photos/thumbnail/ST101931-2a24a2.jpg" src="/photos/tint/ST101931-65ba1d.jpg" height="5264" width="7369" />
  <span class="full">
    <span style="background-image: url('/photos/large/ST101931-326dde.jpg')"></span>
  </span>
  <a class="open" href="/st101931" data-target="st101931">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/st102112-1" data-target="st102112-1" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/st101457" data-target="st101457" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/30</li>
    <li><span class="aperture"><em>f</em>/</span>6.3</li>
	</ul> -->
</li>
<li class="item " id="st101457" style="background-image: url('/photos/tint/ST101457-65ba1d.jpg')" title="ST101457">
  <img class="lazyload" data-src="/photos/thumbnail/ST101457-2a24a2.jpg" src="/photos/tint/ST101457-65ba1d.jpg" height="7952" width="5304" />
  <span class="full">
    <span style="background-image: url('/photos/large/ST101457-326dde.jpg')"></span>
  </span>
  <a class="open" href="/st101457" data-target="st101457">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/st101931" data-target="st101931" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/st101431" data-target="st101431" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/80</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li>
	</ul> -->
</li>
<li class="item " id="st101431" style="background-image: url('/photos/tint/ST101431-65ba1d.jpg')" title="ST101431">
  <img class="lazyload" data-src="/photos/thumbnail/ST101431-2a24a2.jpg" src="/photos/tint/ST101431-65ba1d.jpg" height="7952" width="5304" />
  <span class="full">
    <span style="background-image: url('/photos/large/ST101431-326dde.jpg')"></span>
  </span>
  <a class="open" href="/st101431" data-target="st101431">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/st101457" data-target="st101457" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/st101389" data-target="st101389" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/60</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li>
	</ul> -->
</li>
<li class="item " id="st101389" style="background-image: url('/photos/tint/ST101389-65ba1d.jpg')" title="ST101389">
  <img class="lazyload" data-src="/photos/thumbnail/ST101389-2a24a2.jpg" src="/photos/tint/ST101389-65ba1d.jpg" height="5234" width="7847" />
  <span class="full">
    <span style="background-image: url('/photos/large/ST101389-326dde.jpg')"></span>
  </span>
  <a class="open" href="/st101389" data-target="st101389">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/st101431" data-target="st101431" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/st101373" data-target="st101373" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/320</li>
    <li><span class="aperture"><em>f</em>/</span>4.5</li>
	</ul> -->
</li>
<li class="item " id="st101373" style="background-image: url('/photos/tint/ST101373-65ba1d.jpg')" title="ST101373">
  <img class="lazyload" data-src="/photos/thumbnail/ST101373-2a24a2.jpg" src="/photos/tint/ST101373-65ba1d.jpg" height="4243" width="5304" />
  <span class="full">
    <span style="background-image: url('/photos/large/ST101373-326dde.jpg')"></span>
  </span>
  <a class="open" href="/st101373" data-target="st101373">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/st101389" data-target="st101389" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/st101363" data-target="st101363" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/100</li>
    <li><span class="aperture"><em>f</em>/</span>5.0</li>
	</ul> -->
</li>
<li class="item " id="st101363" style="background-image: url('/photos/tint/ST101363-65ba1d.jpg')" title="ST101363">
  <img class="lazyload" data-src="/photos/thumbnail/ST101363-2a24a2.jpg" src="/photos/tint/ST101363-65ba1d.jpg" height="6630" width="5304" />
  <span class="full">
    <span style="background-image: url('/photos/large/ST101363-326dde.jpg')"></span>
  </span>
  <a class="open" href="/st101363" data-target="st101363">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/st101373" data-target="st101373" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/st101315" data-target="st101315" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/60</li>
    <li><span class="aperture"><em>f</em>/</span>4.0</li>
	</ul> -->
</li>
<li class="item " id="st101315" style="background-image: url('/photos/tint/ST101315-65ba1d.jpg')" title="ST101315">
  <img class="lazyload" data-src="/photos/thumbnail/ST101315-2a24a2.jpg" src="/photos/tint/ST101315-65ba1d.jpg" height="5524" width="4419" />
  <span class="full">
    <span style="background-image: url('/photos/large/ST101315-326dde.jpg')"></span>
  </span>
  <a class="open" href="/st101315" data-target="st101315">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/st101363" data-target="st101363" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/st101263" data-target="st101263" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/80</li>
    <li><span class="aperture"><em>f</em>/</span>4.5</li>
	</ul> -->
</li>
<li class="item " id="st101263" style="background-image: url('/photos/tint/ST101263-65ba1d.jpg')" title="ST101263">
  <img class="lazyload" data-src="/photos/thumbnail/ST101263-2a24a2.jpg" src="/photos/tint/ST101263-65ba1d.jpg" height="4997" width="7491" />
  <span class="full">
    <span style="background-image: url('/photos/large/ST101263-326dde.jpg')"></span>
  </span>
  <a class="open" href="/st101263" data-target="st101263">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/st101315" data-target="st101315" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/st101219" data-target="st101219" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/800</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li>
	</ul> -->
</li>
<li class="item " id="st101219" style="background-image: url('/photos/tint/ST101219-65ba1d.jpg')" title="ST101219">
  <img class="lazyload" data-src="/photos/thumbnail/ST101219-2a24a2.jpg" src="/photos/tint/ST101219-65ba1d.jpg" height="5304" width="7952" />
  <span class="full">
    <span style="background-image: url('/photos/large/ST101219-326dde.jpg')"></span>
  </span>
  <a class="open" href="/st101219" data-target="st101219">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/st101263" data-target="st101263" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/st101216" data-target="st101216" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/5000</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li>
	</ul> -->
</li>
<li class="item " id="st101216" style="background-image: url('/photos/tint/ST101216-65ba1d.jpg')" title="ST101216">
  <img class="lazyload" data-src="/photos/thumbnail/ST101216-2a24a2.jpg" src="/photos/tint/ST101216-65ba1d.jpg" height="3032" width="2426" />
  <span class="full">
    <span style="background-image: url('/photos/large/ST101216-326dde.jpg')"></span>
  </span>
  <a class="open" href="/st101216" data-target="st101216">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/st101219" data-target="st101219" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/st100947" data-target="st100947" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/1600</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li>
	</ul> -->
</li>
<li class="item " id="st100947" style="background-image: url('/photos/tint/ST100947-65ba1d.jpg')" title="ST100947">
  <img class="lazyload" data-src="/photos/thumbnail/ST100947-2a24a2.jpg" src="/photos/tint/ST100947-65ba1d.jpg" height="4970" width="7952" />
  <span class="full">
    <span style="background-image: url('/photos/large/ST100947-326dde.jpg')"></span>
  </span>
  <a class="open" href="/st100947" data-target="st100947">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/st101216" data-target="st101216" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/st100925" data-target="st100925" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/200</li>
    <li><span class="aperture"><em>f</em>/</span>4.0</li>
	</ul> -->
</li>
<li class="item " id="st100925" style="background-image: url('/photos/tint/ST100925-65ba1d.jpg')" title="ST100925">
  <img class="lazyload" data-src="/photos/thumbnail/ST100925-2a24a2.jpg" src="/photos/tint/ST100925-65ba1d.jpg" height="5076" width="7610" />
  <span class="full">
    <span style="background-image: url('/photos/large/ST100925-326dde.jpg')"></span>
  </span>
  <a class="open" href="/st100925" data-target="st100925">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/st100947" data-target="st100947" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/st100888" data-target="st100888" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/400</li>
    <li><span class="aperture"><em>f</em>/</span>4.5</li>
	</ul> -->
</li>
<li class="item " id="st100888" style="background-image: url('/photos/tint/ST100888-65ba1d.jpg')" title="ST100888">
  <img class="lazyload" data-src="/photos/thumbnail/ST100888-2a24a2.jpg" src="/photos/tint/ST100888-65ba1d.jpg" height="4198" width="4198" />
  <span class="full">
    <span style="background-image: url('/photos/large/ST100888-326dde.jpg')"></span>
  </span>
  <a class="open" href="/st100888" data-target="st100888">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/st100925" data-target="st100925" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/st100816" data-target="st100816" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/160</li>
    <li><span class="aperture"><em>f</em>/</span>4.0</li>
	</ul> -->
</li>
<li class="item " id="st100816" style="background-image: url('/photos/tint/ST100816-65ba1d.jpg')" title="ST100816">
  <img class="lazyload" data-src="/photos/thumbnail/ST100816-2a24a2.jpg" src="/photos/tint/ST100816-65ba1d.jpg" height="5304" width="7952" />
  <span class="full">
    <span style="background-image: url('/photos/large/ST100816-326dde.jpg')"></span>
  </span>
  <a class="open" href="/st100816" data-target="st100816">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/st100888" data-target="st100888" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/st101822" data-target="st101822" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/400</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li>
	</ul> -->
</li>
<li class="item " id="st101822" style="background-image: url('/photos/tint/ST101822-65ba1d.jpg')" title="ST101822">
  <img class="lazyload" data-src="/photos/thumbnail/ST101822-2a24a2.jpg" src="/photos/tint/ST101822-65ba1d.jpg" height="4450" width="7911" />
  <span class="full">
    <span style="background-image: url('/photos/large/ST101822-326dde.jpg')"></span>
  </span>
  <a class="open" href="/st101822" data-target="st101822">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/st100816" data-target="st100816" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
`);