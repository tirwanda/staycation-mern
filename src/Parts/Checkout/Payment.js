import React from 'react'
import Fade from 'react-reveal/Fade'
import { InputText, InputFile } from 'elements/Form'

import logoBCA from 'assets/images/logo-bca.jpg'
import logoMandiri from 'assets/images/logo-mandiri.jpg'

export default function Payment(props) {
    const { data, ItemDetails, checkout } = props;
    
    const tax = 10;
    const subTotal = ItemDetails.price * checkout.duration;
    const grandTotal = (subTotal * tax) / 100 + subTotal;


    return (
        <Fade>
            <div className="container" style={{ marginBottom: 30 }}>
                <div className="row justify-content-center align-items-center">
                    <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
                        <Fade dellay={300}>
                            <p className="mb-4">Transfer Pembayaran</p>
                            <p>Tax: {tax}%</p>
                            <p>Sub total: ${subTotal}</p>
                            <p>Grand total: ${grandTotal}</p>

                            <div className="row mt-4">
                                <div className="col-3 text-right">
                                    <img src={logoBCA} alt="Bank Central Asia" width="60"/>
                                </div>
                                <div className="col">
                                    <dl>
                                        <dd>Bank Central Asia</dd>
                                        <dd>2208 1996</dd>
                                        <dd>BuildWith Angga</dd>
                                    </dl>
                                </div>
                            </div>

                            <div className="col">
                                <div className="col-3 text-right">
                                    <img src={logoMandiri} alt="Bank Mandiri" width="60"/>
                                </div>

                                <div className="col">
                                    <dl>
                                        <dd>Bank Mandiri</dd>
                                        <dd>2208 1996</dd>
                                        <dd>BuildWith Angga</dd>
                                    </dl>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
                        <Fade dellay={600}>
                            <label htmlFor="proofPayment">Upload Bukti Transfer</label>
                            <InputFile 
                                accept="image/*"
                                name="proofPayment"
                                id="proofPayment"
                                value={data.proofPayment}
                                onChange={props.onChange}
                            />

                            <label htmlFor="bankName">Asal Bank</label>
                            <InputText 
                                id="bankName"
                                name="bankName"
                                value={data.bankName}
                                onChange={props.onChange}
                            />

                            <label htmlFor="bankHolder">Nama Pengirim</label>
                            <InputText 
                                id="bankHolder"
                                name="bankHolder"
                                value={data.bankHolder}
                                onChange={props.onChange}
                            />
                        </Fade>
                    </div>
                </div>
            </div>
        </Fade>
    )
}
