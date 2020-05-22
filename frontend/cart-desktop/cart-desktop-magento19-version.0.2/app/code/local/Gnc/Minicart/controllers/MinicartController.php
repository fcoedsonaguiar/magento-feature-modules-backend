<?php
class Gnc_Minicart_MinicartController extends Mage_Core_Controller_Front_Action
{
    public function indexAction()
    {

        $response = array();

        $productId = $this->getRequest()->getParam('id');
        $paramater = array(
            'product' => $productId,
            'qty' => '1',
            'form_key' => Mage::getSingleton('core/session')->getFormKey(),
        );

        $product = Mage::getModel('catalog/product')
            ->load($productId);

        $cart = Mage::helper('checkout/cart')->getCart();
        $cart->addProduct($product, $paramater);
        $cart->save();

        $quote = Mage::getSingleton('checkout/session')->getQuote();
        $item = $quote->getItemByProduct($product);

        $response['name'] = $product->getName();
        $response['price'] = Mage::helper('checkout')->formatPrice($product->getPrice(), 2);
        $response['finalPrice'] = Mage::helper('checkout')->formatPrice($product->getFinalPrice(), 2);
        $response['productImage'] = Mage::getModel('catalog/product')->getImageUrl($product);
        $response['itemQty'] = $item->getQty();


        echo json_encode($response);

    }
}