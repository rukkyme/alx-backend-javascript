import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([upload, user]) => console.log(`${upload.body} ${user.firstName} ${user.lastName}`))
    .catch(() => {
      console.log('Signup system offline');
    });
}
