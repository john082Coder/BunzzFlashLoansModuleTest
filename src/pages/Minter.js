import { Button, Col, Container, Row, Form, Spinner } from "react-bootstrap";
import React, { useState,useCallback  } from "react";

import useBunzz from '../hooks/useBunzz';

import { getFlashLenderContract, getFlashBorrower2Contract, getFlashMinterContract, flashBorrow, approveRepayment, flashBorrowAndReenter, flashBorrowAndSteal } from '../contracts/utils'
import { useWeb3React } from "@web3-react/core";

import { bnToDec, isAddress } from "../utils";
const Minter = () => {
    const bunzz = useBunzz();
    const { account} = useWeb3React();
    

    const flashLenderContract = getFlashLenderContract(bunzz);
    const flashBorrowerContract = getFlashBorrower2Contract(bunzz);
    const flashMinterContract = getFlashMinterContract(bunzz);
   
    const [tokenAddress, setTokenAddress] = useState("");
    const [borrowAmount, setBorrowAmount] = useState("");
   

    const [pendingFlashBorrow, setPendingFlashBorrow] = useState(false);
    const [pendingApproveRepayment, setPendingApproveRepayment] = useState(false);
    const [pendingFlashBorrowAndSteal, setPendingFlashBorrowAndSteal] = useState(false);
    const [pendingFlashBorrowAndReenter, setPendingFlashBorrowAndReenter] = useState(false);

    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col lg="4" md="4" xs="12">
                    Flash Mint
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Input Token Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter Address" value={tokenAddress} onChange={(val) => setTokenAddress(val.target.value)} />
                            <Form.Label>Input Amount</Form.Label>
                            <Form.Control type="email" placeholder="Enter Address" value={borrowAmount} onChange={(val) => setBorrowAmount(val.target.value)} />
                        </Form.Group>
                            {!pendingFlashBorrow ?
                                <Button className="mx-3" variant="dark" onClick={async () => {
                                    setPendingFlashBorrow(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await flashBorrow(
                                        flashBorrowerContract,
                                        tokenAddress,
                                        borrowAmount,
                                        account,
                                    );
                                
                                
                                    setPendingFlashBorrow(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingFlashBorrow(false);
                                    
                                }
                            }}>
                                Flash Borrow
                            </Button>
                            :
                            <Button className="mx-3 " variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} Flash Borrow
                            </Button>
                        }
                        {!pendingApproveRepayment ?
                                <Button className="mx-3" variant="dark" onClick={async () => {
                                    setPendingApproveRepayment(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await approveRepayment(
                                        flashBorrowerContract,
                                        tokenAddress,
                                        borrowAmount,
                                        account,
                                    );
                                
                                
                                    setPendingApproveRepayment(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingApproveRepayment(false);
                                    
                                }
                            }}>
                                Approve Repayment
                            </Button>
                            :
                            <Button className="mx-3 " variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} Approve Repayment
                            </Button>
                        }
                        {!pendingFlashBorrowAndReenter ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingFlashBorrowAndReenter(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await flashBorrowAndReenter(
                                        flashBorrowerContract,
                                        tokenAddress,
                                        borrowAmount,
                                        account,
                                    );
                                
                                
                                    setPendingFlashBorrowAndReenter(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingFlashBorrowAndReenter(false);
                                    
                                }
                            }}>
                                FlashBorrow And Reenter
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} FlashBorrow And Reenter
                            </Button>
                        }
                        {!pendingFlashBorrowAndSteal ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingFlashBorrowAndSteal(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await flashBorrowAndSteal(
                                        flashBorrowerContract,
                                        tokenAddress,
                                        borrowAmount,
                                        account,
                                    );
                                
                                
                                    setPendingFlashBorrowAndSteal(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingFlashBorrowAndSteal(false);
                                    
                                }
                            }}>
                                FlashBorrow And Steal
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} FlashBorrow And Steal
                            </Button>
                        }
                      
                      
                      
                       
                    </Form>     
                </Col>
            </Row>
        </Container>
    )
}

export default Minter;