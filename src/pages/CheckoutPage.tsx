import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import PageLayout from '@/components/PageLayout';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import RequireAuth from '@/components/RequireAuth';
import { toast } from 'sonner';
import PhonePePayment from '@/components/PhonePePayment';

const CheckoutPage = () => {
  const { items, total, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: user?.email || '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'US',
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // If PhonePe is selected, don't do the traditional flow - it's handled by the component
    if (paymentMethod === 'phonepe') {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate order processing for other payment methods
    setTimeout(() => {
      clearCart();
      navigate('/order-success');
      toast.success('Order placed successfully!');
      setIsSubmitting(false);
    }, 1500);
  };
  
  const handlePhonePeSuccess = (txnId: string) => {
    setTransactionId(txnId);
    // Store in localStorage so we can retrieve it on callback
    localStorage.setItem('currentTransactionId', txnId);
  };
  
  if (items.length === 0) {
    navigate('/cart');
    return null;
  }
  
  // Convert price to Rupees
  const totalInRupees = total * 75;
  const taxInRupees = totalInRupees * 0.08;
  const grandTotalInRupees = totalInRupees + taxInRupees;
  
  return (
    <RequireAuth>
      <PageLayout>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 dark:text-gray-100">Checkout</h1>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Shipping and Payment Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Shipping Information */}
                <div className="bg-white dark:bg-card rounded-lg shadow-sm border border-border dark:border-border overflow-hidden p-6">
                  <h2 className="text-xl font-semibold mb-4 dark:text-gray-100">Shipping Information</h2>
                  
                  <div className="grid gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="fullName" className="dark:text-gray-200">Full Name</Label>
                        <Input 
                          id="fullName" 
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="dark:bg-secondary dark:text-gray-200 dark:border-secondary"
                          required 
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email" className="dark:text-gray-200">Email</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          value={formData.email}
                          onChange={handleChange}
                          className="dark:bg-secondary dark:text-gray-200 dark:border-secondary"
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="address" className="dark:text-gray-200">Street Address</Label>
                      <Input 
                        id="address" 
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="dark:bg-secondary dark:text-gray-200 dark:border-secondary"
                        required 
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="city" className="dark:text-gray-200">City</Label>
                        <Input 
                          id="city" 
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="dark:bg-secondary dark:text-gray-200 dark:border-secondary"
                          required 
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="state" className="dark:text-gray-200">State / Province</Label>
                        <Input 
                          id="state" 
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="dark:bg-secondary dark:text-gray-200 dark:border-secondary"
                          required 
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="zip" className="dark:text-gray-200">ZIP / Postal Code</Label>
                        <Input 
                          id="zip" 
                          name="zip"
                          value={formData.zip}
                          onChange={handleChange}
                          className="dark:bg-secondary dark:text-gray-200 dark:border-secondary"
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="country" className="dark:text-gray-200">Country</Label>
                      <Select defaultValue="US">
                        <SelectTrigger id="country" className="dark:bg-secondary dark:text-gray-200 dark:border-secondary">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent className="dark:bg-card dark:text-gray-200 dark:border-border">
                          <SelectItem value="US">India</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                {/* Payment Method */}
                <div className="bg-white dark:bg-card rounded-lg shadow-sm border border-border dark:border-border overflow-hidden p-6">
                  <h2 className="text-xl font-semibold mb-4 dark:text-gray-100">Payment Method</h2>
                  
                  <RadioGroup 
                    defaultValue="credit" 
                    className="mb-6"
                    onValueChange={setPaymentMethod}
                  >
                    <div className="flex items-center space-x-2 border rounded-md p-3 dark:border-border hover:bg-muted/50 dark:hover:bg-secondary/30 cursor-pointer">
                      <RadioGroupItem value="credit" id="credit" className="dark:border-gray-500" />
                      <Label htmlFor="credit" className="flex-1 cursor-pointer dark:text-gray-200">
                        Credit or Debit Card
                      </Label>
                      <div className="flex space-x-2">
                        <div className="h-6 w-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
                        <div className="h-6 w-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
                        <div className="h-6 w-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 border rounded-md p-3 dark:border-border hover:bg-muted/50 dark:hover:bg-secondary/30 cursor-pointer">
                      <RadioGroupItem value="phonepe" id="phonepe" className="dark:border-gray-500" />
                      <Label htmlFor="phonepe" className="flex-1 cursor-pointer dark:text-gray-200">
                        PhonePe
                      </Label>
                      <div className="h-6 w-16 bg-purple-100 dark:bg-purple-900 rounded flex items-center justify-center">
                        <span className="text-xs font-bold text-purple-800 dark:text-purple-200">PhonePe</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 border rounded-md p-3 dark:border-border hover:bg-muted/50 dark:hover:bg-secondary/30 cursor-pointer">
                      <RadioGroupItem value="paypal" id="paypal" className="dark:border-gray-500" />
                      <Label htmlFor="paypal" className="flex-1 cursor-pointer dark:text-gray-200">
                        PayPal
                      </Label>
                      <div className="h-6 w-16 bg-blue-100 dark:bg-blue-900 rounded"></div>
                    </div>
                  </RadioGroup>
                  
                  {paymentMethod === 'credit' && (
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="cardName" className="dark:text-gray-200">Name on Card</Label>
                        <Input 
                          id="cardName" 
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleChange}
                          className="dark:bg-secondary dark:text-gray-200 dark:border-secondary"
                          required 
                        />
                      </div>
                      
                      <div className="grid gap-2">
                        <Label htmlFor="cardNumber" className="dark:text-gray-200">Card Number</Label>
                        <Input 
                          id="cardNumber" 
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          className="dark:bg-secondary dark:text-gray-200 dark:border-secondary"
                          required 
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="expDate" className="dark:text-gray-200">Expiration Date</Label>
                          <Input 
                            id="expDate" 
                            name="expDate"
                            value={formData.expDate}
                            onChange={handleChange}
                            className="dark:bg-secondary dark:text-gray-200 dark:border-secondary"
                            required 
                            placeholder="MM/YY"
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="cvv" className="dark:text-gray-200">CVV</Label>
                          <Input 
                            id="cvv" 
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            className="dark:bg-secondary dark:text-gray-200 dark:border-secondary"
                            required 
                            placeholder="123"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white dark:bg-card rounded-lg shadow-sm border border-border dark:border-border overflow-hidden p-6 sticky top-24">
                  <h2 className="text-xl font-semibold mb-4 dark:text-gray-100">Order Summary</h2>
                  
                  <div className="space-y-4 mb-4">
                    {items.map((item) => (
                      <div key={item.product.id} className="flex justify-between">
                        <div className="flex items-start">
                          <div className="text-sm dark:text-gray-300">
                            <span className="font-medium dark:text-gray-200">{item.quantity}x</span> {item.product.name}
                          </div>
                        </div>
                        <div className="text-sm font-medium dark:text-gray-200">
                          ₹{(item.product.price * item.quantity * 75).toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Separator className="my-4 dark:bg-border" />
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground dark:text-gray-400">Subtotal</span>
                      <span className="dark:text-gray-300">₹{totalInRupees.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground dark:text-gray-400">Shipping</span>
                      <span className="dark:text-gray-300">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground dark:text-gray-400">Tax</span>
                      <span className="dark:text-gray-300">₹{taxInRupees.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Separator className="my-4 dark:bg-border" />
                  
                  <div className="flex justify-between font-semibold text-lg mb-6">
                    <span className="dark:text-gray-100">Total</span>
                    <span className="dark:text-gray-100">₹{grandTotalInRupees.toFixed(2)}</span>
                  </div>
                  
                  {paymentMethod === 'phonepe' ? (
                    <PhonePePayment 
                      amount={grandTotalInRupees} 
                      onSuccess={handlePhonePeSuccess} 
                    />
                  ) : (
                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Processing...' : 'Place Order'}
                    </Button>
                  )}
                  
                  <p className="text-xs text-muted-foreground dark:text-gray-400 text-center mt-4">
                    By placing your order, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </PageLayout>
    </RequireAuth>
  );
};

export default CheckoutPage;
