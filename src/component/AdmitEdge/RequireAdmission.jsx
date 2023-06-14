import { Component } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export class RequireAdmission extends Component {
  continue = (e) => {
    e.preventDefault();
    // eslint-disable-next-line react/prop-types
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    // eslint-disable-next-line react/prop-types
    this.props.prevStep();
  };
  render() {
    return (
      <div className="bgImg-edge mt-24">
        <div className="overlay z-50 p-6">
            <div className="text-center mt-10 z-40">
            <h1 className="text-[38px] text-white font-medium">
              AdmitEDGE Admission Genie
            </h1>
            <p className="text-[26px] text-white">
              Best Path To Your Dream Admit - Granted in just 4 clicks!
            </p>
          </div>
          <div className="w-[1140px] h-[330px] bg-[#D0D1D1] mx-auto rounded-sm mt-10 p-7 text-center">
            <div className="mt-5">
              <h3 className="text-[25px] text-black">
              What kind of assistance would you require for admissions?
              </h3>
              <div className="grid grid-cols-3 justify-center items-center mt-12 gap-x-11 px-10">
              <div className="flex items-center">
                    <label className="label cursor-pointer">
                    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" />
                    <span className="label-text uppercase ml-2 text-xl">Complete guidance</span> 
                </label>

                    </div>
                    <div className="flex items-center">
                    <label className="label cursor-pointer">
                    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" />
                    <span className="label-text capitalize ml-2 text-xl">University selection</span> 
                </label>

                    </div>
                    <div className="flex items-center">
                    <label className="label cursor-pointer">
                    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" />
                    <span className="label-text capitalize ml-2 text-xl">Application support</span> 
                </label>

                    </div>
                    <div className="flex items-center">
                    <label className="label cursor-pointer">
                    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" />
                    <span className="label-text capitalize ml-2 text-xl">SOP</span> 
                </label>

                    </div>
                    <div className="flex items-center">
                    <label className="label cursor-pointer">
                    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" />
                    <span className="label-text capitalize ml-2 text-xl">Visa interview</span> 
                </label>

                    </div>
              </div>
            </div>
            <div className="mt-9 flex gap-x-1 justify-center">
            <button className="btn btn-secondary px-10 hover:bg-[#e02629] bg-[#ED1C20]" onClick={this.back}><BsArrowLeft className="mr-3 text-lg font-semibold" />Previous</button>
            <button className="btn btn-secondary px-10 hover:bg-[#e02629] bg-[#ED1C20]" onClick={this.continue}>Next <BsArrowRight className="ml-3 text-lg font-semibold" /></button>
            </div>
            {/* <NextPreviusButton /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default RequireAdmission;