import  { Component } from 'react';
import AdmitEdge from './AdmitEdge';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
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
      <div>
{/* <dialog id="my_modal_3" className="modal">
  <form method="dialog" className="modal-box">
  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
  <h3 className="font-bold text-lg">Hello!</h3>
  <p className="py-4">Press ESC key or click on ✕ button to close</p>
  </form>
</dialog> */}
{window.location.reload(true)}
  <AdmitEdge></AdmitEdge>
      </div>
    );
  }
}

export default Success;
