import React from "react";

const Contact = () => {
  const contactStyles = {
    display: "flex"
  };

  return (
    <div style={contactStyles}>
      <article className="pa3 pa5-ns">
        <h1 className="f2">Title Text with Image</h1>
        <img
          src="http://tachyons.io/img/space.jpg"
          className="w-100 f5 measure"
          alt="outer space"
        />
        <p className="measure lh-copy">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
        <p className="measure lh-copy">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      </article>
      <div class="container-fluid contactform">
        <div class="col-xs-12 col-md-9">
          <h3>Contact</h3>
          <form>
            <div class="form-group">
              <label for="UserEmail">Email address</label>
              <input
                type="email"
                class="form-control"
                id="userEmail"
                aria-describedby="userEmail"
                placeholder="example@gmail.com"
              />
            </div>
            <div class="form-group">
              <label for="fullName">Full Name</label>
              <input
                type="name"
                class="form-control mw100-100"
                id="fullName"
                placeholder="John Smith"
              />
            </div>
            <div class="form-group">
              <label for="messageInput">Message</label>
              <textarea
                class="form-control"
                id="massageInput"
                rows="5"
                placeholder="What do you want to say?"
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
