<template>
   <div class="bg-dark bg-opacity-75 m-auto">
    <div>
      <div class="about-us bg-opacity-75 bg-light pt-5 pb-3">
        <div class="container">
          <h2 class="text-center mb-4">Hakkımızda</h2>
          <div class="row">
            <div class="col-md-4 mb-4">
              <div class="card">
                <img src="https://via.placeholder.com/350x250" class="card-img-top" alt="Jane Doe">
                <div class="card-body">
                  <h5 class="card-title">Jane Doe</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec viverra nisl. Nullam ut magna lectus. Nullam feugiat lorem eu nibh commodo tempus.</p>
                  <a href="#" class="btn btn-primary">LinkedIn</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card">
                <img src="https://via.placeholder.com/350x250" class="card-img-top" alt="John Doe">
                <div class="card-body">
                  <h5 class="card-title">John Doe</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec viverra nisl. Nullam ut magna lectus. Nullam feugiat lorem eu nibh commodo tempus.</p>
                  <a href="#" class="btn btn-primary">LinkedIn</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card">
                <img src="https://via.placeholder.com/350x250" class="card-img-top" alt="Jane Smith">
                <div class="card-body">
                  <h5 class="card-title">Jane Smith</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec viverra nisl. Nullam ut magna lectus. Nullam feugiat lorem eu nibh commodo tempus.</p>
                  <a href="#" class="btn btn-primary">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="contact-us pt-5 pb-3">
        <div class="container">
          <h2 class="text-center mb-4">Bize Ulaşın</h2>
          <div class="row">
            <div class="col-md-6 mb-4">
              <div class="card">
                <div class="card-body">
                  <div class="map-responsive">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d602.404099912163!2d-73.98654179128468!3d40.74844003511714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a742f06b5%3A0x5c48f66012a03ac9!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1651071423552!5m2!1sen!2sus" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
</div>
<div class="address">
<h5>Adres</h5>
<p>1234 Yol Adı, Şehir, Ülke</p>
</div>
<div class="phone">
<h5>Telefon</h5>
<p>+1 123-456-7890</p>
</div>
<div class="email">
<h5>E-posta</h5>
<p>info@example.com</p>
</div>
<div class="social-media">
<h5>Sosyal Medya</h5>
<ul class="list-inline">
<li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
<li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
<li class="list-inline-item"><a href="#"><i class="fab fa-instagram"></i></a></li>
</ul>
</div>
</div>
</div>
</div>
<div class="col-md-6 mb-4">
<form>
<div class="form-group">
<label for="name">Adınız</label>
<input type="text" class="form-control" id="name">
</div>
<div class="form-group">
<label for="email">E-posta Adresiniz</label>
<input type="email" class="form-control" id="email">
</div>
<div class="form-group">
<label for="message">Mesajınız</label>
<textarea class="form-control" id="message" rows="5"></textarea>
</div>
<button type="submit" class="btn btn-primary">Gönder</button>
</form>
</div>
</div>
</div>
</div>

  </div>
</div>
</template>
<script>
export default {
  name: 'AboutUs',
}
</script>
<style scoped>
.about-us h2 {
  font-size: 28px;
  font-weight: bold;
}

.about-us .card-title {
  font-size: 18px;
  font-weight: bold;
}

.contact-us h2 {
  font-size: 28px;
  font-weight: bold;
}

.contact-us .card-title {
  font-size: 18px;
  font-weight: bold;
}

.map-responsive {
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
}

.map-responsive iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  border: 0;
}
</style>
  