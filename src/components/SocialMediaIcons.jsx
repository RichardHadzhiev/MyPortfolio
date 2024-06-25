const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/richardhadzhiev/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin" src="src\assets\linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/richard.hadzhiev/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook" src="src\assets\facebook.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/richard_hadz/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram" src="src\assets\instagram.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/RichardHadzhiev"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github" src="src\assets\IMG3.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
