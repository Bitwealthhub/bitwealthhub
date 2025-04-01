# BitWealth Hub - Cryptocurrency Investment Platform

## Overview
BitWealth Hub is a professional cryptocurrency investment platform that offers four investment plans with different returns and durations. The platform includes a user dashboard for investors and an admin panel for site management.

## Website Structure

### Main Pages
- **index.html** - Home page with features and investment plans
- **about.html** - About the company
- **plans.html** - Detailed investment plans
- **contact.html** - Contact information and form
- **login.html** - User login
- **register.html** - New user registration

### User Dashboard
- **user/dashboard.html** - Main user dashboard
- Other user pages (investments, deposit, withdraw, transactions, referrals, settings)

### Admin Panel
- **admin/index.html** - Admin dashboard
- Other admin pages (users, investments, deposits, withdrawals, transactions, plans, referrals, settings)

## Replacing Placeholder Data with Real User Data

All placeholder data in the user and admin panels has been removed and replaced with clean templates ready for backend integration. To integrate with your backend system:

1. **Admin Panel (admin/index.html)**: 
   - Replace zero values with actual statistics from your database
   - Populate the Recent Activities and Latest Users tables with real data
   - Update the charts with real investment distribution data

2. **User Dashboard (user/dashboard.html)**:
   - Replace user information with dynamic content from user sessions
   - Populate investment tables with real user investments
   - Update transaction history with real user transactions
   - Generate real referral links based on user IDs

## Investment Plans

The platform offers four investment plans:

1. **Basic Plan**
   - Minimum: $100
   - Maximum: $1,999
   - Return: 10% after 12 hours
   - Referral: 10%

2. **Premium Plan**
   - Minimum: $2,000
   - Maximum: $5,999
   - Return: 15% after 24 hours
   - Referral: 10%

3. **Gold Plan**
   - Minimum: $6,000
   - Maximum: $9,999
   - Return: 25% after 48 hours
   - Referral: 10%

4. **Advanced Plan**
   - Minimum: $10,000
   - Maximum: Unlimited
   - Return: 40% after 72 hours
   - Referral: 10%

## Contact Information

- **Email**: bitwealthhubb@gmail.com
- **Phone**: +1(201) 477-8071
- **Address**: 123 Main Street, Suite 456, New York, NY 10001

## Technical Notes

- The website uses Bootstrap 5 for responsive design
- Charts are implemented using Chart.js
- All image assets are stored in the /images directory
- CSS files are in the /css directory
- JavaScript files are in the /js directory

## Backend Integration Requirements

To make this website fully functional, you'll need to implement:

1. User authentication system
2. Database for user accounts and transactions
3. Investment processing system
4. Payment gateway integration for Bitcoin deposits
5. Automated payout system
6. Admin management tools
7. Email notification system

## Important Security Considerations

When implementing the backend:
- Use HTTPS for all pages
- Implement proper password hashing
- Set up Bitcoin wallet security
- Implement rate limiting and anti-fraud measures
- Create regular database backups