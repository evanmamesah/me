const Section2 = () => {
    return (
      <section className="cv-block info">
        <div className="container">
          <div className="work-experience group" id="work-experience">
            <h2 className="text-center">Favourite Subjects</h2>
            <div className="item">
              <div className="row">
                <div className="col-md-6">
                  <h3>Front End Development</h3>
                  <h4 className="organization">Fundamental of Javascripts</h4>
                </div>
                <div className="col-md-6">
                  <time className="period">8/2023 - Present</time>
                </div>
              </div>
              <p className="text-muted">
                All of these personal CV wouldn't be able achieved without the knowledge of the Front End,
                thanks to that I'm able to create such a beautiful personal CV.
              </p>
            </div>
            <div className="item">
              <div className="row">
                <div className="col-md-6">
                  <h3>Computer Security</h3>
                  <h4 className="organization">Pioneer of Ethical Hacking</h4>
                </div>
                <div className="col-md-6">
                  <time className="period">01/2022 - 7/2022</time>
                </div>
              </div>
              <p className="text-muted">
                All the magnificent things we've seen on the movies related to hacking is actually
                a real thing, where we're able to access the computer software components inside out!
              </p>
            </div>
            <div className="item">
              <div className="row">
                <div className="col-md-6">
                  <h3>Web Design</h3>
                  <h4 className="organization">The Beginning of Creativity</h4>
                </div>
                <div className="col-md-6">
                  <time className="period">8/2022 - 9/2022</time>
                </div>
              </div>
              <p className="text-muted">
                We've seen a lot of fancy websites when we're exploring the internet through our PC or 
                smartphone. All of it can be done or can be achieved by learning Web Design, where we can
                express our creativity to the limit.
              </p>
            </div>
          </div>
          <div className="education group" id="education">
            <h2 className="text-center">Education</h2>
            <div className="item">
              <div className="row">
                <div className="col-md-6">
                  <h3>High School</h3>
                  <h4 className="organization">SMA N 3 Tondano</h4>
                </div>
                <div className="col-md-6">
                  <time className="period">09/2017 - 05/2020</time>
                </div>
              </div>
              <p className="text-muted">
                SMA N 3 Tondano is an amazing school that I have ever been. There are many friendship
                and knowledge that can be found in there.
              </p>
            </div>
            <div className="item">
              <div className="row">
                <div className="col-md-6">
                  <h3>Applied College</h3>
                  <h4 className="organization">Universitas Klabat</h4>
                </div>
                <div className="col-md-6">
                  <time className="period">09/2020 - Present</time>
                </div>
              </div>
              <p className="text-muted">
                This place is where everything begins, from having no prior knowledge in coding into mastering
                codes.
              </p>
            </div>
          </div>
          <div className="group" id="skills">
            <div className="row">
              <div className="col-md-6">
                <div className="skills info-card">
                  <h2>Skills</h2>
                  <h3>HTML</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={70}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                  <h3>PHP</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={70}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                  <h3>JavaScript</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={70}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="contact-info info-card">
                  <h2>Contact Info</h2>
                  <div className="row">
                    <div className="col-1">
                      <i className="ion-android-calendar icon" />
                    </div>
                    <div className="col-9">
                      <span>21/9/2003</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-1">
                      <i className="ion-person icon" />
                    </div>
                    <div className="col-9">
                      <span>Mamesah, Evan Samuel Reinheart</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-1">
                      <i className="ion-ios-telephone icon" />
                    </div>
                    <div className="col-9">
                      <span>+62 898 1576 654</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-1">
                      <i className="ion-at icon" />
                    </div>
                    <div className="col-9">
                      <span>s22110392@student.unklab.ac.id</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hobbies group" id="hobbies">
            <h2 className="text-center">Hobbies</h2>
            <p className="text-center text-muted">
              I love taking pictures, which makes me a photographer. I love listening to music,
              yet I am no musician, and I love playing video games but I am not a gamer.
            </p>
          </div>
        </div>
      </section>
    );
}

export default Section2;
