<template>
  <div class="loader-wrapper">
    <div class="spinner spinner-5">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.loader-wrapper {
    margin: 0 auto;
}

.spinner {
  width: 100px;
  height: 100px;
  background: #eee;
  border-radius: 50%;
  position: relative;
  margin: 50px 100px;
  display: inline-block;
}

.spinner::after,
.spinner::before {
  content: "";
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50px;
}

.spinner-5 {
  width: 0;
  height: 0;
}

span {
  display: block;
  height: 20px;
  width: 20px;
  background: #ddd;
  border-radius: 50%;
  position: absolute;
  top: 0;
}

span:nth-child(1) {
  left: -40px;
  animation: bounce 1s ease-in-out infinite;
}

span:nth-child(2) {
  animation: bounce 1s ease-in-out infinite 0.33s;
}

span:nth-child(3) {
  left: 40px;
  animation: bounce 1s ease-in-out infinite 0.66s;
}

@keyframes bounce {
  0%,
  75%,
  100% {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(-30px);
  }
}
</style>