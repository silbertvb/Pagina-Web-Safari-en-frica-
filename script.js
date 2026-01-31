<script>
  const video = document.getElementById("bgVideo");
  const btn = document.getElementById("soundBtn");

  btn.addEventListener("click", () => {
    video.muted = false;
    video.volume = 0.5;
  });
</script>