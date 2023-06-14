/* eslint-disable react/prop-types */
import { Component } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export class NextPreviusButton extends Component {
    continue = (e) => {
        console.log(e)
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
            <div className="mt-12 flex gap-x-1 justify-center">
            <button className="btn btn-secondary px-10 hover:bg-[#e02629] bg-[#ED1C20]" onClick={this.back}><BsArrowLeft className="mr-3 text-lg font-semibold" />Previous</button>
            <button className="btn btn-secondary px-10 hover:bg-[#e02629] bg-[#ED1C20]" onClick={this.continue}>Next <BsArrowRight className="ml-3 text-lg font-semibold" /></button>
            </div>
        );
      }
    }

export default NextPreviusButton;