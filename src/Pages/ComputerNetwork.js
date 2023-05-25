import Footer from "../Components/Navbar/Footer";
import Navbar from "../Components/Navbar/Navbar";

import ComputerNetworkLogo from "../Assets/ComputerNetwork.jpg";

export default function ComputerNetwork() {
  return (
    <div>
      <Navbar />
      <div className="text-start mt-3 ms-3 me-5">
        <div>
          <img
            src={ComputerNetworkLogo}
            alt="kpopzstation"
            className="w-100"
            style={{ height: "13rem", objectFit: "cover" }}
          ></img>
        </div>

        <div className="ms-4 me-4">
          <div className="mt-3">
            <div className="fs-3 fw-bold">Computer Network Project</div>
            <p className="mt-1 fs-6">
              <p>
                In the Assurance of Learning Computer Network project, Me and my
                friend intend to create a network configuration for floors 4, 5,
                and 6 for the BINUS @ Alam Sutera campus. Our configuration
                contains subnetting per floor, EIGRP routing, HTTP, DNS, SMTP,
                FTP, and DHCP protocols.
              </p>
            </p>
          </div>

          <div className="mt-3">
            <div className="fs-3 fw-bold ">Additional information</div>
            <div>
              <p>
                My team made this application to fulfill the Computer Network
                course project. For more details you can see our project report
                at
              </p>
              <a href="https://binusianorg-my.sharepoint.com/personal/hans_cupiterson_binus_ac_id/_layouts/15/guestaccess.aspx?guestaccesstoken=jf%2Fn0fYZhqt7uOIuGjT1EYjcv7lBOmyFu4sZbBlmWR4%3D&docid=2_0728e664a041b43e39f4bf890f9f13597&rev=1&e=Q2fDAz">
                Computer Network Report
              </a>
            </div>

            <div className="mt-4 fs-4 fw-semibold ">Cisco Packet Tracer</div>
            <div>
              <p>You can see our network configuration at:</p>
              <a href="https://binusianorg-my.sharepoint.com/personal/hans_cupiterson_binus_ac_id/_layouts/15/guestaccess.aspx?guestaccesstoken=JaQuNddg90p01AQJ7kANyyeRRXrjKz9LmUYjczNILFA%3D&docid=2_09e29a533444942d4abf4119522b96519&rev=1&e=4NOh3m">
                Network Configuration Cisco
              </a>
            </div>

            <div className="mt-4 fs-4 fw-semibold ">Network Topology</div>
            <div>
              <p>You can also see our Network Topology, VLSM, device used at</p>
              <a href="https://www.figma.com/file/SCMrWPrMKwXKQK44aJ8flX/LN01_Kelompok-5_AOL-Computer-Network?type=whiteboard&node-id=0%3A1&t=eOePsmcTLZCjcHkE-1">
                Figma
              </a>
            </div>
          </div>

          <div className="mt-4">
            <div className="fs-4 fw-semibold">
              Contributor for this application:
            </div>
            <ul>
              <li>
                <span className="fst-italic">Hans Arthur Cupiterson</span>
              </li>
              <li>
                <span className="fst-italic">NORBERT OLIVER</span>
              </li>
              <li>
                <span className="fst-italic">NATHANAEL JUAN GAUTHAMA</span>
              </li>
              <li>
                <span className="fst-italic">SINGGIH TULUS MAKMUD</span>
              </li>
              <li>
                <span className="fst-italic">RUSSELL WILLIAM ARDIAN</span>
              </li>
              <li>
                <span className="fst-italic">SHAN HAVILAH</span>
              </li>
              <li>
                <span className="fst-italic">KEVIN CHUNADY</span>
              </li>
              <li>
                <span className="fst-italic">CHRISTOFER CUTHBERT</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
