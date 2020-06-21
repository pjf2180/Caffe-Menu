import { GenericCollection } from '../genericCollection';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { FirebaseDbModule } from '../firebase-db.module';
import { AppUser } from '../../../models/user.models'

@Injectable({
    providedIn: FirebaseDbModule
})
export class AppUserCollection<AppUser> extends GenericCollection<AppUser>{
    constructor(protected afs: AngularFirestore) {
        super(afs);
        this.setCollectionName('users');
    }
}