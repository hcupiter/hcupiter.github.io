export default function Footer() {
  return (
    <footer
      className="bg-primary mt-5 ps-5 pe-5 d-flex align-items-center "
      style={{ width: "100%", height: "10rem" }}
    >
      <div className="d-flex align-items-center">
        <i className="bi bi-envelope-fill text-light me-4 fs-4"></i>
        <div className="text-light d-flex flex-column align-items-start">
          <div className="fs-5 fw-medium">Contact me at</div>
          <a
            href="mailto: hans.cupiterson@binus.ac.id"
            className="text-light fst-italic text-decoration-none"
          >
            hans.cupiterson@binus.ac.id
          </a>
        </div>
      </div>
    </footer>
  );
}
