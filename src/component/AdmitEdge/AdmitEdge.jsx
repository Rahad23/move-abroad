import { Component } from "react";
import "./AdmitEdge.css";

export class AdmitEdge extends Component {
  continue = (e) => {
    e.preventDefault();
    // eslint-disable-next-line react/prop-types
    this.props.nextStep();
  };

  render() {
    return (
      <div className="bgImg-edge mt-24">
        <div className="overlay z-50 p-6">
            <div className="text-center mt-10 z-40">
            <h1 className="text-[38px] text-white font-semibold">
              <span className="uppercase font-semibold">Move<span className="text-[#D82027] font-semibold">Abroad</span></span> Admission Genie
            </h1>
            <p className="text-[26px] text-white">
              Best Path To Your Dream Admit - Granted in just 4 clicks!
            </p>
          </div>
          <div className="lg:w-[1140px] w-[300px] lg:h-[330px] h-[520px] bg-[#D0D1D1] mx-auto rounded-sm mt-10 p-7 text-center">
            <div className="mt-5">
              <h3 className="text-[25px] text-black">
                The path to a dream admit is different for different students.
                What's yours?
              </h3>
              <h2 className="text-[25px] text-black mt-10">
                Just answer a few basic questions & find the perfect admission
                program for you!
              </h2>
            </div>
            <div className="mt-12">
              <button onClick={this.continue} className="btn lg:w-[289px] w-[230px] h-[58px] bg-[#ED1C20] border-none rounded-sm hover:bg-[#d4171a] text-lg">
                FIND MY PROGRAM
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdmitEdge;
