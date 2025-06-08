import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import readingTime from 'reading-time'

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            description: 'The title of the post',
            required: true,
        },
        date: {
            type: 'date',
            description: 'The date of the post',
            required: true,
        },
        description: {
            type: 'string',
            description: 'The description of the post',
            required: true,
        },
        tags: {
            type: 'list',
            of: { type: 'string' },
            description: 'Tags for the post',
        },
        published: {
            type: 'boolean',
            description: 'Is the post published?',
            default: true,
        },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (post) => `/blog/${post._raw.flattenedPath}`,
        },
        slug: {
            type: 'string',
            resolve: (post) => post._raw.flattenedPath,
        },
        readingTime: {
            type: 'json',
            resolve: (post) => readingTime(post.body.raw),
        },
    },
}))

export default makeSource({
    contentDirPath: './content',
    documentTypes: [Post],
    mdx: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
})