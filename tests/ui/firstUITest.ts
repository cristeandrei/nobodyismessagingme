import {assert, describe, test} from 'vitest'
import {setup} from '@nuxt/test-utils'

describe('My ui test', async () => {
    await setup({
        rootDir:"../src"
    })
    test('my ui test', () => {
        assert.isOk(true);
    })
})