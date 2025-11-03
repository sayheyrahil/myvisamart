interface WelcomeEmailParams {
    email: string;
}

export function buildWelcomeEmail({ email }: WelcomeEmailParams): string {
    const logoUrl = process.env.LOGO_URL || 'https://via.placeholder.com/120x60/F59E0B/FFFFFF?text=My+Visa+Mart';

     return `
  <div style="background: linear-gradient(180deg, #f7faff 0%, #e6f0ff 100%);">
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: linear-gradient(180deg, #f7faff 0%, #e6f0ff 100%);">
      
      <!-- Logo and tagline section -->
      <div style="text-align: center; margin-bottom: 40px;">
        <div style="margin-bottom: 20px;">
          <!-- Try to load the actual logo first -->
          <img src="${logoUrl}" alt="My Visa Mart Logo" style="max-width: 520px; height: auto; display: block; margin: 0 auto; border: none;" />
          <!-- Always show text logo as backup since email clients are unpredictable -->
         
        </div>
        <p style="color: #9CA3AF; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; margin: 0; font-weight: 500;">
          SMARTER, SIMPLER, AND SMOOTHER VISA<br>EXPERIENCE
        </p>
      </div>

      <!-- Main content area with white background -->
      <div style="background-color: #ffffff; padding: 40px 30px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);">
        <!-- Main heading -->
        <h1 style="color: #1e3a8a; font-size: 32px; font-weight: 700; text-align: center; margin: 0 0 20px 0; line-height: 1.2;">
          Welcome to the My<br>Visa Mart Community!
        </h1>

        <!-- Subheading -->
        <p style="color: #374151; font-size: 16px; text-align: center; margin: 20px 0 30px 0; line-height: 1.5; font-weight: 500;">
          You're officially on our insider list — be the first<br>to know when we go live!
        </p>

        <!-- Orange divider line -->
        <div style="width: 300px; height: 3px; background-color: #F59E0B; margin: 30px auto; border-radius: 2px;"></div>

        <!-- Main content -->
        <div style="color: #374151; font-size: 15px; line-height: 1.6; margin: 30px 0;">
          <p style="margin-bottom: 20px;">Hi, ${email}</p>
          
          <p style="margin-bottom: 20px;">
            Thank you for joining the My Visa Mart community! 🎉
          </p>
          
          <p style="margin-bottom: 25px;">
            We're currently putting the final touches on something exciting — a platform built to make your Visa experience smarter, simpler, and smoother.
          </p>
          
          <p style="margin-bottom: 20px; font-weight: 600;">
            Here's what you can expect next:
          </p>
          
          <!-- Benefits list -->
          <div style="margin: 20px 0;">
            <div style="display: flex; align-items: flex-start; margin-bottom: 12px;">
              <span style="color: #10B981; font-weight: bold; margin-right: 10px; font-size: 16px;">✓</span>
              <span>Early access before the official launch</span>
            </div>
            <div style="display: flex; align-items: flex-start; margin-bottom: 12px;">
              <span style="color: #10B981; font-weight: bold; margin-right: 10px; font-size: 16px;">✓</span>
              <span>Exclusive updates about new features and offers</span>
            </div>
            <div style="display: flex; align-items: flex-start; margin-bottom: 12px;">
              <span style="color: #10B981; font-weight: bold; margin-right: 10px; font-size: 16px;">✓</span>
              <span>Special launch rewards just for early subscribers</span>
            </div>
            <div style="display: flex; align-items: flex-start; margin-bottom: 12px;">
              <span style="color: #10B981; font-weight: bold; margin-right: 10px; font-size: 16px;">✓</span>
              <span>Sneak peek of what we're building</span>
            </div>
          </div>
          
          <p style="margin: 25px 0 20px 0;">
            Stay tuned — we'll be sharing sneak peeks and early-bird surprises soon! 👀
          </p>
          
          <p style="margin-bottom: 5px;">Warm regards,</p>
          <p style="margin: 0; font-weight: 600;">The Visamart Team</p>
        </div>
      </div>
    </div>
    </div>
  `;
}
