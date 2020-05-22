<?php
class Gnc_Customer_Model_Observer
{
    public function customerLogin()
    {
        return Mage::getSingleton('customer/session')->setBeforeAuthUrl(Mage::helper('checkout/cart')->getCartUrl());
    }
}