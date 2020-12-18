import {
  SocialAuthServiceConfig,
  GoogleLoginProvider,
} from 'angularx-social-login';

export const SocialLoginConfig = {
  provide: 'SocialAuthServiceConfig',
  useValue: {
    autoLogin: false,
    providers: [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider(
          '387605256556-2i9bmp6uomj2jfk3a6sh2k0atti7i6hn.apps.googleusercontent.com'
        ),
      },
    ],
  } as SocialAuthServiceConfig,
};
