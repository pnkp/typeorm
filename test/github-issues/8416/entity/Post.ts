import {Category} from "./Category";
import {Entity} from "../../../../src/decorator/entity/Entity";
import {PrimaryGeneratedColumn} from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import {Column} from "../../../../src/decorator/columns/Column";
import {ManyToOne} from "../../../../src/decorator/relations/ManyToOne";
import {JoinColumn} from "../../../../src/decorator/relations/JoinColumn";
import {DeleteDateColumn, OneToMany} from "../../../../src";
import {Author} from "./Author";

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    categoryId: string;

    @ManyToOne(() => Category, category => category.posts)
    @JoinColumn({ name: "categoryId" })
    category: Category;

    @OneToMany(() => Author, author => author.post, {
        cascade: true
    })
    authors: Author[];

    @DeleteDateColumn()
    deletedAt?: Date;
}
